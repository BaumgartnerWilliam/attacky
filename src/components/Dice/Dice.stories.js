import React from 'react';
import { withKnobs, number } from '@storybook/addon-knobs';

import Dice from './Dice';


export default {
  title: 'Dice',
  decorators: [withKnobs]
};


export const withValue = () => <Dice value={number('value', 3)} />
