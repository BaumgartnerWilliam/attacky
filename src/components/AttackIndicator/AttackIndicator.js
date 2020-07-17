import React from 'react';
import { Row, Spinner } from 'react-bootstrap';

const AttackIndicator = ({ isPlayer }) => (
  <Row data-testid="attacking" className="justify-content-center">
    <Spinner
      size="sm"
      animation="grow"
      variant={(isPlayer && 'primary') || 'danger'}
    />
  </Row>
);

export default AttackIndicator;
