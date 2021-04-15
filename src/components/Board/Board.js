import './Board.css';

import Cell from '../Cell';

const Board = ({ cellValues, cellClicked, winningCombo }) => {
  // const cellArray = Array.apply(null, Array(9));
  // const cellArray = Array.from(new Array(9));

  const cells = cellValues.map((cell, i) => {
    const highlightCell = winningCombo && winningCombo.indexOf(i) >= 0;

    return (
      <Cell
        key={i}
        value={cell}
        clicked={() => cellClicked(i)}
        canHighlight={highlightCell}
      />
    );
  });
  return <div id="board">{cells}</div>;
};

export default Board;
