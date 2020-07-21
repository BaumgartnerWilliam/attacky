import React from 'react';
import { Row } from 'react-bootstrap';
import './Dice.css';

import dice0 from '../../assets/dice0.png';
import dice1 from '../../assets/dice1.png';
import dice2 from '../../assets/dice2.png';
import dice3 from '../../assets/dice3.png';
import dice4 from '../../assets/dice4.png';
import dice5 from '../../assets/dice5.png';
import dice6 from '../../assets/dice6.png';

const diceAssets = {
  0: dice0,
  1: dice1,
  2: dice2,
  3: dice3,
  4: dice4,
  5: dice5,
  6: dice6
};

// 
const Dice = ({ value, animate }) => (
  <Row data-testid="dice" className="justify-content-center pt-4">
    {/* we can use classNames lib as well */}
    <img
      className={`${animate && 'dice-animating'}`}
      data-value={value}
      data-testid="value"
      src={animate && diceAssets[0] || diceAssets[value]}
      style={{ width: '70px' }}
    />
  </Row>
);

export default Dice;
