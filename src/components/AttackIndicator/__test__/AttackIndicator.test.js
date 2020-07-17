import React from 'react';
import { render } from '@testing-library/react';
import AttackIndicator from '../AttackIndicator';

describe('attack-indicator component', () => {
  it('renders without crashing', () => {
    const { container } = render(<AttackIndicator />);
    expect(container).toBeInTheDocument();
  });

  it('renders the primary variant', () => {
    const { getByTestId } = render(<AttackIndicator isPlayer={true} />);
    const el = getByTestId('attacking');
    expect(el.firstChild).toHaveClass('text-primary');
  });

  it('renders the danger variant', () => {
    const { getByTestId } = render(<AttackIndicator />);
    const el = getByTestId('attacking');
    expect(el.firstChild).toHaveClass('text-danger');
  });

  it('matches snapshot', () => {
    const { getByTestId } = render(<AttackIndicator />);
    const testid = getByTestId('attacking');
    expect(testid).toMatchSnapshot();
  });
});
