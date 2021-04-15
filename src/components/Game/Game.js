import './Game.css';

import { Fragment } from 'react';
import { useState } from 'react';

import { calculateWinner, isCellEmpty } from '../../utils/utils';
import Board from '../Board';
import Modal from '../Modal';

const Game = () => {
  const [cellValues, setCellValues] = useState([...Array(9)]);
  const [isPlayerTwoNext, setIsPlayerTwoNext] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [numberTurnsLeft, setNumberTurnsLeft] = useState(9);
  const [winner, setWinner] = useState(null);
  const [winningCombo, setWinningCombo] = useState([]);

  const restart = () => {
    setCellValues([...Array(9)]);
    setIsPlayerTwoNext(false);
    setIsGameOver(false);
    setNumberTurnsLeft(9);
    setWinner(null);
    setWinningCombo([]);
  };

  const onCellClicked = (index) => {
    const isValueCellEmpty = isCellEmpty(index, cellValues);

    if (isValueCellEmpty) {
      const newCellValues = [...cellValues];
      const nbrTurnsLeftUpdated = numberTurnsLeft - 1;
      newCellValues[index] = isPlayerTwoNext ? 'X' : 'O';

      const result = calculateWinner(newCellValues, nbrTurnsLeftUpdated, index);

      setCellValues(newCellValues);
      setIsPlayerTwoNext(!isPlayerTwoNext);
      setIsGameOver(result.hasResult);
      setNumberTurnsLeft(nbrTurnsLeftUpdated);
      setWinner(result.winner);
      setWinningCombo(result.winningCombo);
    }
  };
  return (
    <Fragment>
      <div id="game">
        <h1>Tic Tac Toe</h1>
        <Board
          cellValues={cellValues}
          cellClicked={onCellClicked}
          winningCombo={winningCombo}
        />
      </div>
      <Modal
        isGameOver={isGameOver}
        winner={winner}
        startNewGame={() => restart()}
      />
    </Fragment>
  );
};

export default Game;
