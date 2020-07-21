import React from 'react';
import { render } from '@testing-library/react';
import Character from '../Character';

describe('character component', () => {
  it('renders without crashing', () => {
    const { container, getByTestId } = render(<Character />);
    expect(container).toBeInTheDocument();
    expect(getByTestId('character')).toBeInTheDocument();
  });

  it('has a health bar', () => {
    const { getByTestId } = render(<Character />);
    const el = getByTestId('health-bar');
    expect(el).toBeInTheDocument();
  });

  it('has an attacking indicator', () => {
    const { queryByTestId, rerender, getByTestId } = render(<Character />);
    const testid = 'attacking';
    expect(queryByTestId(testid)).toBeNull();
    rerender(<Character isAttacking={true} />);
    expect(getByTestId(testid)).toBeInTheDocument();
  });

  it('renders children', () => {
    const { getByTestId } = render(
      <Character>
        <p data-testid="test"></p>
      </Character>
    );
    const testid = 'test';
    expect(getByTestId(testid)).toBeInTheDocument();
  });

  it('matches snapshot of ennemy attacking', () => {
    const { getByTestId } = render(
      <Character isAttacking={true}>
        <p>children</p>
      </Character>
    );
    expect(getByTestId('character')).toMatchSnapshot();
  });

  it('matches snapshot of player not attacking', () => {
    const { getByTestId } = render(
      <Character isPlayer={true}>
        <p>children</p>
      </Character>
    );
    expect(getByTestId('character')).toMatchSnapshot();
  });
});
