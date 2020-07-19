import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';

import Dice from '../Dice/Dice';
import HealthBar from '../HealthBar/HealthBar';
import AttackIndicator from '../AttackIndicator/AttackIndicator';
import CharacterModel from './CharacterModel/CharacterModel';

const Character = ({
  hp,
  die1,
  die2,
  lowHp,
  isPlayer,
  children,
  isAttacking
}) => (
  <Container data-testid="character" className="character w-50">
    <Row>
      {!isPlayer && (
        <Col data-testid="enemy-dice">
          <Dice value={die1} />
          <Dice value={die2} />
        </Col>
      )}
      <Col>
        {isAttacking && <AttackIndicator isPlayer={isPlayer} />}
        <HealthBar value={hp} isDanger={lowHp} />
        {children}
      </Col>
      {isPlayer && (
        <Col data-testid="player-dice">
          <Dice value={die1} />
          <Dice value={die2} />
        </Col>
      )}
    </Row>
  </Container>
);

Character.Model = CharacterModel;

export default Character;
