import React from 'react';
import {ProgressBar, Row} from 'react-bootstrap';

const HealthBar = ({ value, isDanger }) => (
  <Row className="justify-content-center">
    <ProgressBar
      data-testid="health-bar"
      data-value={value}
      striped
      animated
      className="w-50"
      variant={(isDanger && 'danger') || 'success'}
      now={value}
    />
  </Row>
);

export default HealthBar;
