import React from 'react';
import {Row} from 'react-bootstrap';

const Dice = ({value}) => (
  <Row data-testid="dice" className="justify-content-center">
    <div data-testid="value" data-value={value}>{value}</div>
  </Row>
);

export default Dice;
