import React from 'react';
import { withKnobs, number, boolean } from '@storybook/addon-knobs';

import HealthBar from './HealthBar';

export default {
  title: 'HealthBar',
  decorators: [withKnobs]
};

export const example = () => (
  <HealthBar
    value={number('value', 70)}
    isDanger={boolean('isDanger', false)}
  />
);
