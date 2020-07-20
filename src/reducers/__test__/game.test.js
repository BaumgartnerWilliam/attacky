import { turnResult } from '../game';
import { GAME } from '../../actions/';
import { GAME as GAME_CONSTANTS } from '../../constants/';

const dummyAction = {
  type: 'dummy'
};

const { resetGame, turnResult: turnResultAction } = GAME;
const { TURN_RESULTS } = GAME_CONSTANTS;

describe('game reducer', () => {
  describe('turnResult', () => {
    it('should return null when game resets', () => {
      const beForeState = 99;
      const state = turnResult(beForeState, resetGame());
      expect(state).toBe(null);
    });

    it('should return the state when no action is handled ', () => {
      const beForeState = 14;
      const state = turnResult(beForeState, dummyAction);
      expect(state).toBe(beForeState);
    });

    it(`should assing the new result when action type is ${TURN_RESULTS}`, () => {
      const beForeState = 17;
      const expectedState = 99;
      const state = turnResult(beForeState, turnResultAction(expectedState));
      expect(state).toBe(expectedState);
    })
  });
});
