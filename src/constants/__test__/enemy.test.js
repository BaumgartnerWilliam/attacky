import { ENEMY_TURN } from '../enemy';

describe('enemy constants', () => {
  it('should match enemy turn constant', () => {
    expect(ENEMY_TURN).toBe('enemy-turn');
  });
});
