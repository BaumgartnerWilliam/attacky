import { GAME } from '../constants';

const { RESET_GAME, END_TURN, TURN_RESULTS, DRAW_TURN } = GAME;

export const endTurn = (isPlayer) => ({
  type: END_TURN,
  isPlayer
});

export const turnResult = (result) => ({
  type: TURN_RESULTS,
  result
});

export const resetGame = () => ({
  type: RESET_GAME
});

export const draw = () => ({
  type: DRAW_TURN
})
