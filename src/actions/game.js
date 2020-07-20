import { GAME } from '../constants';

const { RESET_GAME, END_TURN, TURN_RESULTS, DRAW_TURN, GAME_OVER } = GAME;

export const endTurn = isPlayer => ({
  type: END_TURN,
  isPlayer
});

export const turnResult = result => ({
  type: TURN_RESULTS,
  result
});

export const resetGame = () => ({
  type: RESET_GAME
});

export const draw = () => ({
  type: DRAW_TURN
});

export const gameOver = message => ({
  type: GAME_OVER,
  message
});
