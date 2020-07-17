import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import CharacterModel from './CharacterModel';
import idleAsset from '../../../assets/monster_idle.png';

export default {
  title: 'CharacterModel',
  decorators: [withKnobs]
};

export const IdleMonster = () => <CharacterModel src={idleAsset} />;
