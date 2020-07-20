import { endTurn as passTurn} from './game';
import { PLAYER } from '../constants';

const {
  PLAYER_TURN,
  PLAYER_HIT,
  PLAYER_LOW_HP,
  PLAYER_ROLLING_DICE,
  PLAYER_ROLLED_DICE
} = PLAYER;

export const playerTurn = () => ({
  type: PLAYER_TURN
});

export const endTurn = () => passTurn(true);

export const hitPlayer = damage => ({
  type: PLAYER_HIT,
  value: damage
});

export const rollDice = () => ({
  type: PLAYER_ROLLING_DICE
});

export const lowHp = () => ({
  type: PLAYER_LOW_HP
})

export const diceRolled = values => ({
  type: PLAYER_ROLLED_DICE,
  values
});
