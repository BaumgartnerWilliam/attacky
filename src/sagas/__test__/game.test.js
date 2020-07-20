import { startGame, manageTurns } from '../game';
import { recordSaga } from './sagaHelper';
import { GAME, PLAYER, ENEMY } from '../../actions';

const { resetGame, turnResult } = GAME;
const { playerTurn } = PLAYER;
const { enemyTurn, hitEnemy } = ENEMY;

describe('gameSaga', () => {
  describe('startGame generator', () => {
    it('should dispatch the right actions', async () => {
      const dispatched = await recordSaga(startGame);

      expect(dispatched).toContainEqual(playerTurn());
      expect(dispatched).toContainEqual(resetGame());
    });
  });

  describe('manageTurns generator', () => {
    describe('when it is the player turn', () => {
      const initialAction = { isPlayer: true };
      it('should dispatch the right actions', async () => {
        const dispatched = await recordSaga(manageTurns, {
          initialAction
        });

        expect(dispatched).toContainEqual(enemyTurn());
      });
    });

    describe('when it is not the player turn', () => {
      describe('when player wins', () => {
        const initialAction = { isPlayer: false };
        const getState = jest.fn().mockReturnValue({
          player: {
            dice: {
              die1: 6,
              die2: 5
            }
          },
          enemy: {
            dice: {
              die1: 2,
              die2: 1
            }
          }
        });

        it('should dispatch the correct actions', async () => {
          const dispatched = await recordSaga(manageTurns, {
            initialAction,
            getState
          });

          expect(dispatched).toContainEqual(turnResult(8));
          expect(dispatched).toContainEqual(hitEnemy(8));
        });
      });
    });
  });
});
