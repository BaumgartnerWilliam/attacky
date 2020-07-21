jest.mock('../../utils/delay');

import SagaTester from 'redux-saga-tester';

import { delay } from '../../utils';
import game from '../game';
import reducers from '../../reducers';
import {
  GAME as GAME_CONSTANTS,
  PLAYER as PLAYER_CONSTANTS,
  ENEMY as ENEMY_CONSTANTS
} from '../../constants';
import { GAME, PLAYER, ENEMY } from '../../actions';

const { END_TURN, GAME_OVER, DRAW_TURN, DEFAULT_ACTION_DELAY } = GAME_CONSTANTS;
const { PLAYER_HIT, PLAYER_TURN } = PLAYER_CONSTANTS;
const { ENEMY_HIT } = ENEMY_CONSTANTS;
const { resetGame, turnResult, endTurn, gameOver } = GAME;
const { playerTurn, hitPlayer, diceRolled: playerRollDice } = PLAYER;
const { enemyTurn, hitEnemy, diceRolled: enemyRollDice } = ENEMY;


delay.mockReturnValue(Promise.resolve());

describe('gamesaga', () => {
  let sagaTester = null;

  beforeEach(() => {
    sagaTester = new SagaTester({
      initialState: {},
      reducers
    });
    sagaTester.start(game);
  });

  it('should dispatch game init actions', () => {
    const dispatched = sagaTester.getCalledActions();

    expect(dispatched).toContainEqual(playerTurn());
    expect(dispatched).toContainEqual(resetGame());
    expect(dispatched).not.toContainEqual(enemyTurn());
    expect(dispatched).not.toContainEqual(gameOver());
  });

  describe(`when ${END_TURN} is dispatched`, () => {
    it('should dispatch an enemyTurn action when player finished his turn', () => {
      const isPlayer = true;
      sagaTester.dispatch(endTurn(isPlayer));

      const dispatched = sagaTester.getCalledActions();
      expect(dispatched).toContainEqual(enemyTurn());
      expect(sagaTester.numCalled(PLAYER_HIT)).toBe(0);
      expect(sagaTester.numCalled(ENEMY_HIT)).toBe(0);
      expect(sagaTester.numCalled(DRAW_TURN)).toBe(0);
    });

    it('should compute dice results when enemy finishes his turn', async () => {
      const isPlayer = false;

      sagaTester.dispatch(playerRollDice([1, 1]));
      sagaTester.dispatch(enemyRollDice([2, 6]));
      sagaTester.dispatch(endTurn(isPlayer));

      await sagaTester.waitFor(PLAYER_TURN);

      const dispatched = sagaTester.getCalledActions();
      expect(dispatched).toContainEqual(hitPlayer(6));
      expect(delay).toHaveBeenCalledWith(DEFAULT_ACTION_DELAY);
      expect(sagaTester.numCalled(PLAYER_TURN)).toBe(2);
    });
  });

  describe('game over handler', () => {
    it('should dispatch a game over when enemy hp reaches 0', () => {
      sagaTester.dispatch(hitEnemy(100));
      sagaTester.dispatch(playerTurn());

      const dispatched = sagaTester.getCalledActions();
      expect(dispatched).toContainEqual(gameOver('You Win'));
    });

    it('should dispatch a game over when player hp reaches 0', () => {
      sagaTester.dispatch(hitPlayer(100));
      sagaTester.dispatch(playerTurn());

      const dispatched = sagaTester.getCalledActions();
      expect(sagaTester.numCalled(GAME_OVER)).toBe(1);
    });
  });
});
