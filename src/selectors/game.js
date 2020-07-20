export const getPlayer = ({ player }) => player;
export const getEnemy = ({ enemy }) => enemy;
export const getDice = ({
  player: { dice: playerDice },
  enemy: { dice: enemyDice }
}) => ({
  playerDice: [playerDice.die1, playerDice.die2],
  enemyDice: [enemyDice.die1, enemyDice.die2]
});
