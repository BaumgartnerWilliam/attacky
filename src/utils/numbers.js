export const getRandomInt = max => Math.floor(Math.random() * Math.floor(max));
export const arraySum = (list = []) =>
  list.reduce((sum, value) => sum + value, 0);
