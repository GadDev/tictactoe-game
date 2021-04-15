import './Game.css';

import { Fragment } from 'react';
import { useState } from 'react';

import { initialState } from '../../config/game';
import { calculateWinner, isCellEmpty } from '../../utils/utils';
import Board from '../Board';
import Modal from '../Modal';

const Game = () => {
  const [state, setState] = useState(initialState);
  const {
    cellValues,
    isPlayerTwoNext,
    isGameOver,
    numberTurnsLeft,
    winner,
    winningCombo,
  } = state;

  const restart = () => {
    setState(initialState);
  };

  const onCellClicked = (index) => {
    const isValueCellEmpty = isCellEmpty(index, cellValues);

    if (isValueCellEmpty) {
      const newCellValues = [...cellValues];
      const nbrTurnsLeftUpdated = numberTurnsLeft - 1;
      newCellValues[index] = isPlayerTwoNext ? 'X' : 'O';
      const result = calculateWinner(newCellValues, nbrTurnsLeftUpdated, index);

      setState({
        cellValues: newCellValues,
        isPlayerTwoNext: !isPlayerTwoNext,
        isGameOver: result.hasResult,
        numberTurnsLeft: nbrTurnsLeftUpdated,
        winner: result.winner,
        winningCombo: result.winningCombo,
      });
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
