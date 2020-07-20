import { combineReducers } from 'redux';
import { PLAYER, GAME, DICE, ENEMY } from '../constants';

const {
  INITIAL_HIT_POINTS,
  ENEMY_HIT,
  ENEMY_LOW_HP,
  ENEMY_TURN,
  ENEMY_ROLLED_DICE,
  ENEMY_ROLLING_DICE
} = ENEMY;
const { RESET_GAME } = GAME;
const { PLAYER_TURN } = PLAYER;

export const hp = (state = INITIAL_HIT_POINTS, { value = 0, type }) => {
  switch (type) {
    case ENEMY_HIT:
      const result = state - value;
      return result <= 0 ? 0 : result;
    case RESET_GAME:
      return INITIAL_HIT_POINTS;
    default:
      return state;
  }
};

export const lowHp = (state = false, { type }) => {
  switch (type) {
    case ENEMY_LOW_HP:
      return true;
    case RESET_GAME:
      return false;
    default:
      return state;
  }
};

export const dice = (state = { die1: 0, die2: 0 }, { type, values = [] }) => {
  // null handling just in case
  const [die1 = 0, die2 = 0] = values || [];

  switch (type) {
    case ENEMY_ROLLED_DICE:
      return {
        die1,
        die2
      };
    case RESET_GAME:
      return {
        die1: 0,
        die2: 0
      };
    default:
      return state;
  }
};

export const isAttacking = (state = false, { type }) => {
  switch (type) {
    case PLAYER_TURN:
      return false;
    case ENEMY_TURN:
      return true;
    case RESET_GAME:
      return false;
    default:
      return state;
  }
};

export const isRollingDice = (state = false, { type }) => {
  switch (type) {
    case ENEMY_ROLLING_DICE:
      return true;
    case ENEMY_ROLLED_DICE:
      return false;
    case RESET_GAME:
      return false;
    default:
      return state;
  }
};

export default combineReducers({
  hp,
  lowHp,
  dice,
  isAttacking,
  isRollingDice
});
