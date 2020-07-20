import { all, put, delay, takeEvery, select } from 'redux-saga/effects';
import { PLAYER } from '../actions';
import { GAME as SELECTORS } from '../selectors';
import { GAME, PLAYER as PLAYER_ACTIONS } from '../constants';
import { dice } from '../utils';

const {
  PLAYER_ROLLING_DICE,
  PLAYER_ROLLED_DICE,
  PLAYER_HIT,
  LOW_HP_THRESHOLD
} = PLAYER_ACTIONS;
const { diceRolled, endTurn, lowHp } = PLAYER;
const { DEFAULT_ACTION_DELAY } = GAME;
const { getPlayer } = SELECTORS;

function* rollDice() {
  yield delay(DEFAULT_ACTION_DELAY);
  const diceValues = [dice.getRandomRoll(), dice.getRandomRoll()];
  yield put(diceRolled(diceValues));
}

function* enemyTurn() {
  yield put(endTurn());
}

function* handleHp() {
  const { hp } = yield select(getPlayer);
  if (hp <= LOW_HP_THRESHOLD) {
    yield put(lowHp());
  }
}

export default function* () {
  yield all([
    takeEvery(PLAYER_ROLLING_DICE, rollDice),
    takeEvery(PLAYER_ROLLED_DICE, enemyTurn),
    takeEvery(PLAYER_HIT, handleHp)
  ]);
}
