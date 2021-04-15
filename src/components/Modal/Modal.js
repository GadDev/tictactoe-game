import './Modal.css';

import cn from 'classnames';
const Modal = ({ isGameOver, winner, startNewGame }) => {
  const modalClasses = cn({
    open: isGameOver,
  });
  const playerType = winner === 'O' ? 'Player One' : 'Player2';
  const msg = winner ? `Winner is ${playerType}(${winner})` : 'It is a tie';
  return (
    <div id="modal-overlay" className={modalClasses}>
      <div id="game-result-modal">
        <div id="result-container">
          <div id="winner-container">
            <span>{msg}</span>
          </div>
        </div>
        <div id="new-game-container">
          <button id="new-game-button" onClick={startNewGame}>
            Start New Game
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
