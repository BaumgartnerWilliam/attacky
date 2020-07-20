import { resetGame, endTurn } from '../game';
import { GAME } from '../../constants';

const { RESET_GAME, END_TURN } = GAME;

describe('actions', () => {
  describe('resetGame action creator', () => {
    it(`should match ${RESET_GAME} action type`, () => {
      expect(resetGame()).toEqual({
        type: RESET_GAME
      });
    });
  });

  describe('endTurn action creator', () => {
    it(`should match ${END_TURN} action type`, () => {
      expect(endTurn()).toEqual({
        type: END_TURN,
        isPlayer: undefined
      });
    });

    it('should set isPlayer payload correctly', () => {
      expect(endTurn(false)).toEqual({
        type: END_TURN,
        isPlayer: false
      });
    });
  });
});
