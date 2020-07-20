import { getRandomInt, arraySum } from './numbers';

const DEFAULT_6_DICE = 6;

export const createRandomDiceRoller = (max, min = 1) => () =>
  getRandomInt(max) + min;

export const getRandomRoll = createRandomDiceRoller(DEFAULT_6_DICE);
export const getRollsDifference = (rollList1 = [], rollList2 = []) =>
  arraySum(rollList1) - arraySum(rollList2);
