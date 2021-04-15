import './Game.css';

import { Fragment } from 'react';

import Board from '../Board';

const Game = () => {
  return (
    <Fragment>
      <div id="game">
        <h1>Tic Tac Toe</h1>
        <Board />
      </div>

      <div id="modal-overlay">
        <div id="game-result-modal">
          <div id="result-container">
            <div id="winner-container">
              <span></span>
            </div>
          </div>
          <div id="new-game-container">
            <button id="new-game-button">Start New Game</button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Game;
