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
      die1={number('die1', 1)}
      die2={number('die2', 2)}
      lowHp={boolean('lowHp', false)}
      alive={boolean('alive', false)}
      isAttacking={boolean('isAttacking', false)}
      isPlayer={boolean('isPlayer', false)}>
      <Character.Model src={idleAsset} />
    </Character>
  </Container>
);

export const withEnemy = () => (
  <Container>
    <Row>
      <Character
        hp={number('hp', 70)}
        die1={number('die1', 1)}
        die2={number('die2', 2)}
        lowHp={boolean('lowHp', false)}
        alive={boolean('alive', false)}
        isAttacking={boolean('isAttacking', false)}
        isPlayer={true}>
        <Character.Model src={idleAsset} />
      </Character>
      <Character
        hp={number('hp', 70)}
        die1={number('die1', 1)}
        die2={number('die2', 2)}
        lowHp={boolean('lowHp', false)}
        alive={boolean('alive', false)}
        isAttacking={boolean('isAttacking', false)}
        isPlayer={false}>
        <Character.Model src={idleAsset} />
      </Character>
    </Row>
  </Container>
);
