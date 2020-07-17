import React from 'react';
import { render } from '@testing-library/react';
import HealthBar from '../HealthBar';

describe('health bar component', () => {
  it('renders without crashing', () => {
    const { container } = render(<HealthBar />);
    expect(container).toBeInTheDocument();
  });

  it('renders the value correctly', () => {
    const { getByTestId } = render(<HealthBar value="5" />);
    const el = getByTestId('health-bar');
    expect(el).toHaveAttribute('data-value', '5');
  });

  it('renders the danger version css', () => {
    const { getByTestId } = render(<HealthBar isDanger={true} />);
    const el = getByTestId('health-bar');
    expect(el.firstChild).toHaveClass('bg-danger');
  });

  it('matches snapshot when danger mode', () => {
    const { getByTestId } = render(<HealthBar value={'5'} isDanger={true} />);
    const testid = getByTestId('health-bar');
    expect(testid).toMatchSnapshot();
  });

  it('matches snapshot when not in danger mode', () => {
    const { getByTestId } = render(<HealthBar value={'99'} />);
    const testid = getByTestId('health-bar');
    expect(testid).toMatchSnapshot();
  });
});
