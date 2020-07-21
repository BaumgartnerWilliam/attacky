import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';

import Dice from '../Dice/Dice';
import HealthBar from '../HealthBar/HealthBar';
import AttackIndicator from '../AttackIndicator/AttackIndicator';
import CharacterModel from './CharacterModel/CharacterModel';

const Character = ({ hp, dice, isRollingDice, lowHp, isPlayer, children, isAttacking }) => (
  <Container data-testid="character" className="character w-50">
    <Row className={`${!isPlayer && 'flex-row-reverse'}`}>
      <Col>
        {isAttacking && <AttackIndicator isPlayer={isPlayer} />}
        <HealthBar value={hp} isDanger={lowHp} />
        {children}
      </Col>
      <Col data-testid="dice">
        <Dice value={dice?.die1} animate={isRollingDice} />
        <Dice value={dice?.die2} animate={isRollingDice} />
      </Col>
    </Row>
  </Container>
);

Character.Model = CharacterModel;

export default Character;
