import { all, put, select, takeEvery, call } from 'redux-saga/effects';
import { GAME, ENEMY, PLAYER } from '../actions/';
import { dice, delay } from '../utils/';
import { GAME as CONSTANTS, PLAYER as PLAYER_CONSTANTS } from '../constants/';
import { GAME as SELECTORS } from '../selectors/';

const { resetGame, turnResult, draw, gameOver } = GAME;
const { enemyTurn, hitEnemy } = ENEMY;
const { playerTurn, hitPlayer } = PLAYER;
const { getDice, getPlayer, getEnemy } = SELECTORS;
const { END_TURN, DEFAULT_ACTION_DELAY } = CONSTANTS;
const { PLAYER_TURN } = PLAYER_CONSTANTS;

export function* startGame() {
  yield put(resetGame());
  yield put(playerTurn());
}

export function* manageTurns({ isPlayer } = {}) {
  if (isPlayer) {
    yield put(enemyTurn());
  } else {
    // we now compute who won
    const { playerDice, enemyDice } = yield select(getDice);
    const result = dice.getRollsDifference(playerDice, enemyDice);
    yield put(turnResult(result));
    if (result > 0) {
      yield put(hitEnemy(Math.abs(result)));
    } else if (result === 0) {
      yield put(draw());
    } else {
      yield put(hitPlayer(Math.abs(result)));
    }

    yield call(delay, DEFAULT_ACTION_DELAY);
    yield put(playerTurn());
  }
}

export function* gameOverHandler() {
  const { hp: playerHp } = yield select(getPlayer);
  const { hp: enemyHp } = yield select(getEnemy);

  if (playerHp === 0) {
    yield put(gameOver('You Lose'));
  } else if (enemyHp === 0) {
    yield put(gameOver('You Win'));
  }
}

export default function* () {
  yield all([
    startGame(),
    takeEvery(END_TURN, manageTurns),
    takeEvery(PLAYER_TURN, gameOverHandler)
  ]);
}
