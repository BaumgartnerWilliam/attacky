import { combineReducers } from 'redux';
import { PLAYER, GAME, ENEMY } from '../constants';

const {
  INITIAL_HIT_POINTS,
  PLAYER_HIT,
  PLAYER_LOW_HP,
  PLAYER_TURN,
  PLAYER_ROLLED_DICE,
  PLAYER_ROLLING_DICE
} = PLAYER;
const { RESET_GAME } = GAME;
const { ENEMY_TURN } = ENEMY;

export const hp = (state = INITIAL_HIT_POINTS, { value = 0, type }) => {
  switch (type) {
    case PLAYER_HIT:
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
    case PLAYER_LOW_HP:
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
    case PLAYER_ROLLED_DICE:
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
      return true;
    case ENEMY_TURN:
      return false;
    case RESET_GAME:
      return true;
    default:
      return state;
  }
};

export const isRollingDice = (state = false, { type }) => {
  switch (type) {
    case PLAYER_ROLLING_DICE:
      return true;
    case PLAYER_ROLLED_DICE:
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
