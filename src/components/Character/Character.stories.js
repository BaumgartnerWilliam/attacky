import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { withKnobs, number, boolean } from '@storybook/addon-knobs';

import idleAsset from '../../assets/monster_idle.png';
import Character from './Character';

export default {
  title: 'Character',
  decorators: [withKnobs]
};

export const withHealthPoints = () => (
  <Container>
    <Character
      hp={number('hp', 70)}
      dice1={number('dice1', 1)}
      dice2={number('dice', 2)}
      lowHp={boolean('lowHp', false)}
      alive={boolean('alive', false)}
      isAttacking={boolean('isAttacking', false)}
      isPlayer={boolean('isPlayer', false)}>
      <p>model</p>
    </Character>
  </Container>
);

export const withEnemy = () => (
  <Container>
    <Row>
      <Character
        hp={number('hp', 70)}
        dice1={number('dice1', 1)}
        dice2={number('dice', 2)}
        lowHp={boolean('lowHp', false)}
        alive={boolean('alive', false)}
        isAttacking={boolean('isAttacking', false)}
        isPlayer={true}>
        <p>model</p>
      </Character>
      <Character
        hp={number('hp', 70)}
        dice1={number('dice1', 1)}
        dice2={number('dice', 2)}
        lowHp={boolean('lowHp', false)}
        alive={boolean('alive', false)}
        isAttacking={boolean('isAttacking', false)}
        isPlayer={false}>
        <p>model</p>
      </Character>
    </Row>
  </Container>
);
