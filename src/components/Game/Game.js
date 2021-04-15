import './Game.css';

import { Fragment } from 'react';
import { useState } from 'react';

import Board from '../Board';
import Modal from '../Modal';

const Game = () => {
  const [cellValues, setCellValue] = useState([...Array(9)]);

  const isCellEmpty = (index) => !cellValues[index];
  const onCellClicked = (index) => {
    const empty = isCellEmpty(index);
    if (empty) {
      const newCellValues = [...cellValues];

      newCellValues[index] = index % 2 ? 'X' : 'O';
      setCellValue(newCellValues);
    }
  };
  return (
    <Fragment>
      <div id="game">
        <h1>Tic Tac Toe</h1>
        <Board cellValues={cellValues} cellClicked={onCellClicked} />
      </div>
      <Modal />
    </Fragment>
  );
};

export default Game;
