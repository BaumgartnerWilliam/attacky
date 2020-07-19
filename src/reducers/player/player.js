import { combineReducers } from 'redux';
import { PLAYER } from '../../constants';

const { INITIAL_HIT_POINTS, PLAYER_HIT } = PLAYER;

export const hitPlayer = (state = INITIAL_HIT_POINTS, { value = 0, type }) => {
  switch (type) {
    case PLAYER_HIT:
      return state - value;
    default:
      return state;
  }
};

export default combineReducers({
  hp: hitPlayer
});
