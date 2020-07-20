import React from 'react';
import { connect } from 'react-redux';
import { Container, Row, Button } from 'react-bootstrap';

import idleMonster from '../../assets/monster_idle.png';
import idleKnight from '../../assets/knight_idle.gif';
import { PLAYER as PLAYER_ACTIONS } from '../../actions';
import { Character } from '../../components';

const { rollDice } = PLAYER_ACTIONS;

const Main = ({ enemy, player, onAttack, canAttack, game }) => (
  <Container data-testid="main" className="mt-5">
    {game?.gameOver && (
      <Container>
        <Row className="justify-content-center">{`${game?.message}`}</Row>
      </Container>
    )}
    {!game?.gameOver && (
      <>
        <Container>
          <Row className="justify-content-center">
            {game?.turnResult > 0 && `You did ${game?.turnResult} damage`}
            {game?.turnResult < 0 && `You took ${Math.abs(game?.turnResult)} damage`}
            {game?.turnResult === 0 && `Draw`}
          </Row>
        </Container>
        <Row>
          <Character
            hp={player?.hp}
            dice={player?.dice}
            lowHp={player?.lowHp}
            isAttacking={player?.isAttacking}
            isPlayer={true}>
            <Character.Model src={idleKnight} />
          </Character>
          <Character
            hp={enemy?.hp}
            dice={enemy?.dice}
            lowHp={enemy?.lowHp}
            isAttacking={enemy?.isAttacking}>
            <Character.Model src={idleMonster} />
          </Character>
        </Row>
        <Row className="justify-content-center">
          <Button onClick={onAttack} disabled={!canAttack}>
            Attack me
          </Button>
        </Row>
      </>
    )}
  </Container>
);

const mapState = ({ player, enemy, game }) => {
  return {
    player,
    enemy,
    game,
    canAttack: !player.isRollingDice && player.isAttacking
  };
};

const mapDispatch = dispatch => ({
  onAttack: () => dispatch(rollDice())
});

export default connect(mapState, mapDispatch)(Main);
