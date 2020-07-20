import { combineReducers } from 'redux';
import { GAME, PLAYER } from '../constants';

const { END_TURN, TURN_RESULTS, RESET_GAME, GAME_OVER } = GAME;
const { PLAYER_TURN } = PLAYER;

export const isPlayerTurn = (state = true, { type, isPlayer }) => {
  switch (type) {
    case END_TURN:
      return !isPlayer;
    case RESET_GAME:
      return true;
    default:
      return state;
  }
};

export const turnResult = (state = null, { type, result }) => {
  switch (type) {
    case TURN_RESULTS:
      return result;
    case PLAYER_TURN:
      return null;
    case RESET_GAME:
      return null;
    default:
      return state;
  }
};

export const gameOver = (state = false, { type }) => {
  switch (type) {
    case GAME_OVER:
      return true;
    case RESET_GAME:
      return false;
    default:
      return state;
  }
};

export const message = (state = '', { type, message }) => {
  switch (type) {
    case GAME_OVER:
      return message;
    case RESET_GAME:
      return '';
    default:
      return state;
  }
};

export default combineReducers({
  isPlayerTurn,
  turnResult,
  gameOver,
  message
});
