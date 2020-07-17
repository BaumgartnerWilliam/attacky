import React from 'react';
import { render } from '@testing-library/react';
import Dice from '../Dice';

describe('dice component', () => {
  it('renders without crashing', () => {
    const { container } = render(<Dice />);
    expect(container).toBeInTheDocument();
  });

  it('sets data-value properly', () => {
    const { getByTestId } = render(<Dice value={"5"} />);
    const el = getByTestId('value');
    expect(el).toHaveAttribute('data-value', "5");
  });

  it('matches snapshot', () => {
    const { getByTestId } = render(<Dice value={"5"} />);
    const testid = getByTestId('dice');
    expect(testid).toMatchSnapshot();
  });
});
