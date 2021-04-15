import './Modal.css';

import cn from 'classnames';
const Modal = ({ isGameOver }) => {
  const modalClasses = cn({
    open: isGameOver,
  });
  return (
    <div id="modal-overlay" className={modalClasses}>
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
  );
};

export default Modal;
