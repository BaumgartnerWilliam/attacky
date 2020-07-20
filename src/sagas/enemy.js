import { all, put, delay, takeEvery } from 'redux-saga/effects';
import { ENEMY } from '../actions';
import { GAME, ENEMY as ENEMY_ACTIONS } from '../constants';
import { dice } from '../utils';

const { diceRolled, rollDice, endTurn } = ENEMY;
const { ENEMY_ROLLING_DICE, ENEMY_ROLLED_DICE, ENEMY_TURN } = ENEMY_ACTIONS;
const { DEFAULT_ACTION_DELAY } = GAME;

function* handleEnemyTurn() {
  yield delay(DEFAULT_ACTION_DELAY);
  yield put(rollDice());
  const diceValues = [dice.getRandomRoll(), dice.getRandomRoll()];
  yield put(diceRolled(diceValues));
  yield delay(DEFAULT_ACTION_DELAY);
  yield put(endTurn());
}

export default function* () {
  yield all([takeEvery(ENEMY_TURN, handleEnemyTurn)]);
}
