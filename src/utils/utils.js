import { resultMatrix } from '../config/board';

const result = (hasResult, winner, winningCombo) => {
  return {
    hasResult,
    winner,
    winningCombo,
  };
};

export const calculateWinner = (cellValues, turns, cellIndex) => {
  const ranges = resultMatrix[cellIndex];

  for (let i = 0; i < ranges.length; i++) {
    const currentValue = cellValues[cellIndex];
    const optionOne = cellValues[ranges[i][0]];
    const optionTwo = cellValues[ranges[i][1]];
    const combo = [cellIndex, ranges[i][0], ranges[i][1]];
    const isWinner = currentValue === optionOne && currentValue === optionTwo;

    if (isWinner) {
      return result(true, currentValue, combo);
    }
  }

  if (!turns) {
    return result(true, undefined, []);
  }

  return result(false, undefined, []);
};

export const isCellEmpty = (index, values) => !values[index];
