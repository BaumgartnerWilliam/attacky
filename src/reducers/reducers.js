import { ennemyTurn, playerTurn } from '../actions/actions';
import { ENNEMY_TURN, PLAYER_TURN } from '../constants/contants';

export function todos(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return state.concat([action.text]);
    default:
      return state;
  }
}
