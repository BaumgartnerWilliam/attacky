import React from 'react';
import { render } from '@testing-library/react';
import CharacterModel from '../CharacterModel';
import idleAsset from '../../../../assets/monster_idle.png';

describe('CharacterModel component', () => {
  it('renders without crashing', () => {
    const { container } = render(<CharacterModel />);
    expect(container).toBeInTheDocument();
  });

  it('loads the correct asset', () => {
    const { getByTestId } = render(<CharacterModel src={idleAsset} />);
    const el = getByTestId('model');
    expect(el.firstChild).toHaveAttribute('src', 'monster_idle.png');
  });

  it('matches snapshot', () => {
    const { getByTestId } = render(<CharacterModel src={idleAsset} />);
    const testid = getByTestId('model');
    expect(testid).toMatchSnapshot();
  });
});
