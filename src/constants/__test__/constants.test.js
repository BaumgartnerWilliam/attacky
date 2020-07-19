import { PLAYER_TURN, ENNEMY_TURN } from '../contants';

describe('constants', () => {
  it('PLAYER_TURN should match defined', () => {
    expect(PLAYER_TURN).toBe('player-turn');
  });

  it('ENNEMY_TURN should match defined', () => {
    expect(ENNEMY_TURN).toBe('ennemy-turn');
  });
});
