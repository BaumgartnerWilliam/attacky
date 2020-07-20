import { endTurn as passTurn } from './game';
import { ENEMY } from '../constants';

const { ENEMY_TURN, ENEMY_HIT, ENEMY_ROLLING_DICE, ENEMY_ROLLED_DICE } = ENEMY;

export const enemyTurn = () => ({
  type: ENEMY_TURN
});

export const endTurn = () => passTurn();

export const rollDice = () => ({
  type: ENEMY_ROLLING_DICE
});

export const hitEnemy = damage => ({
  type: ENEMY_HIT,
  value: damage
});

export const diceRolled = values => ({
  type: ENEMY_ROLLED_DICE,
  values
});
