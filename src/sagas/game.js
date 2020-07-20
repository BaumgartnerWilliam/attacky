import { all, put, select, takeEvery, delay } from 'redux-saga/effects';
import { GAME, ENEMY, PLAYER } from '../actions/';
import { dice } from '../utils/';
import { GAME as CONSTANTS } from '../constants/';
import { GAME as SELECTORS } from '../selectors/';

const { resetGame, turnResult, draw } = GAME;
const { enemyTurn, hitEnemy } = ENEMY;
const { playerTurn, hitPlayer } = PLAYER;
const { getDice } = SELECTORS;
const { END_TURN, DEFAULT_ACTION_DELAY } = CONSTANTS;

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
    if(result > 0) {
      yield put(hitEnemy(Math.abs(result)));
    } else if (result === 0) {
      yield put(draw());
    } else {
      yield put(hitPlayer(Math.abs(result)));
    }

    yield delay(DEFAULT_ACTION_DELAY);
    yield put(playerTurn());
  }
}

export default function* () {
  yield all([startGame(), takeEvery(END_TURN, manageTurns)]);
}
