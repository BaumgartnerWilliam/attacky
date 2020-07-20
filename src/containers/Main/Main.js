import React from 'react';
import { connect } from 'react-redux';
import { Container, Row, Button, Col } from 'react-bootstrap';

import { PLAYER as PLAYER_ACTIONS } from '../../actions';
import { Character } from '../../components';

const { rollDice } = PLAYER_ACTIONS;

const Main = ({ enemy, player, onAttack, canAttack, result }) => (
  <Container data-testid="main" className="mt-5">
    <Container>
      <Row className="justify-content-center">
        {result > 0 && `You did ${result} damage`}
        {result < 0 && `You took ${Math.abs(result)} damage`}
        {result === 0 && `Draw`}
      </Row>
    </Container>
    <Row>
      <Character
        hp={player?.hp}
        dice={player?.dice}
        lowHp={player?.lowHp}
        isAttacking={player?.isAttacking}
        isPlayer={true}>
        <p>model</p>
      </Character>
      <Character
        hp={enemy?.hp}
        dice={enemy?.dice}
        lowHp={enemy?.lowHp}
        isAttacking={enemy?.isAttacking}>
        <p>model</p>
      </Character>
    </Row>
    <Row className="justify-content-center">
      <Button onClick={onAttack} disabled={!canAttack}>
        Attack me
      </Button>
    </Row>
  </Container>
);

const mapState = ({ player, enemy, game: { turnResult } }) => {
  return {
    player,
    enemy,
    result: turnResult,
    canAttack: !player.isRollingDice && player.isAttacking
  };
};

const mapDispatch = dispatch => ({
  onAttack: () => dispatch(rollDice())
});

export default connect(mapState, mapDispatch)(Main);
