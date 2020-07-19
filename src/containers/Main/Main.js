import React from 'react';
import { connect } from 'react-redux';
import { Container, Row, Button } from 'react-bootstrap';

import { PLAYER as PLAYER_ACTIONS } from '../../actions';
import { Character } from '../../components';

const { playerTurn } = PLAYER_ACTIONS;

const Main = ({ enemy, player, playerTurn, onAttack }) => (
  <Container data-testid="main" className="mt-5">
    <Row>
      <Character
        hp={player?.hp}
        dice1={player?.dice1}
        dice2={player?.dice2}
        lowHp={player?.lowHp}
        isAttacking={playerTurn}
        isPlayer={true}>
        <p>model</p>
      </Character>
      <Character
        hp={enemy?.hp}
        dice1={enemy?.dice1}
        dice2={enemy?.dice2}
        lowHp={enemy?.lowHp}
        isAttacking={!playerTurn}>
        <p>model</p>
      </Character>
    </Row>
    <Row className="justify-content-center">
      <Button onClick={onAttack}>
        {/* <Button onClick={onAttack} disabled={!playerTurn}> */}
        Attack me
      </Button>
    </Row>
  </Container>
);

const mapState = ({ todos }) => {
  return { todos };
};

const mapDispatch = dispatch => ({
  onAttack: () => dispatch(playerTurn())
});

export default connect(mapState, mapDispatch)(Main);
