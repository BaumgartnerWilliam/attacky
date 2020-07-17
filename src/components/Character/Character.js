import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';

import Dice from '../Dice/Dice';
import HealthBar from '../HealthBar/HealthBar';
import AttackIndicator from '../AttackIndicator/AttackIndicator';

const Character = ({
  hp,
  dice1,
  dice2,
  lowHp,
  isPlayer,
  children,
  isAttacking
}) => (
  <Container data-testid="character" className="character w-50">
    <Row>
      {!isPlayer && (
        <Col data-testid="enemy-dice">
          <Dice value={dice1} data-testid="dice-1" />
          <Dice value={dice2} data-testid="dice-2" />
        </Col>
      )}
      <Col>
        {isAttacking && (
          <AttackIndicator data-testid="attack-indicator" isPlayer={isPlayer} />
        )}
        <HealthBar data-testid="health-bar" value={hp} isDanger={lowHp} />
        {children}
      </Col>
      {isPlayer && (
        <Col data-testid="player-dice">
          <Dice value={dice1} data-testid="dice-1" />
          <Dice value={dice2} data-testid="dice-2" />
        </Col>
      )}
    </Row>
  </Container>
);

export default Character;
