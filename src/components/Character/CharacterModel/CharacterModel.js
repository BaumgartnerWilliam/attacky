import React from 'react';
import { Row } from 'react-bootstrap';
import ApngComponent from 'react-apng'; // replace apngComponent

const CharacterModel = ({ src }) => {
  return (
    <Row data-testid="model" className="character-model">
      <ApngComponent style={{ maxHeight: '200px' }} src={src} autoPlay={true} />
    </Row>
  );
};

export default CharacterModel;
