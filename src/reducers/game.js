import { combineReducers } from 'redux';
import { GAME, PLAYER } from '../constants';

const { END_TURN, TURN_RESULTS, RESET_GAME } = GAME;
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

export default combineReducers({
  isPlayerTurn,
  turnResult
});
