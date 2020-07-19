import { PLAYER } from '../../constants';

const { PLAYER_TURN, PLAYER_HIT } = PLAYER;

export const playerTurn = () => ({
  type: PLAYER_TURN
});

export const hitPlayer = damage => ({
  type: PLAYER_HIT,
  value: damage
});
