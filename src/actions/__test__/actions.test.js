import { ennemyTurn, playerTurn } from '../actions';
import { ENNEMY_TURN, PLAYER_TURN } from '../../constants/contants';

describe('actions', () => {
  it(`should match ${ENNEMY_TURN} action type`, () => {
    expect(ennemyTurn()).toEqual({
      type: ENNEMY_TURN
    });
  });

  it(`should match ${PLAYER_TURN} action type`, () => {
    expect(playerTurn()).toEqual({
      type: PLAYER_TURN
    });
  });
});
