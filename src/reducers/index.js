import { combineReducers } from 'redux';
import player from './player';
import enemy from './enemy';
import game from './game';

export default combineReducers({
  player,
  game,
  enemy
});
