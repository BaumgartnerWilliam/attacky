import { PLAYER_TURN, ENNEMY_TURN } from '../constants/contants';

export const playerTurn = () => ({
  type: PLAYER_TURN
});

export const ennemyTurn = () => ({
  type: ENNEMY_TURN
});
