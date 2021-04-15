import './Board.css';

import Cell from '../Cell';

const Board = ({ cellValues, cellClicked }) => {
  // const cellArray = Array.apply(null, Array(9));
  // const cellArray = Array.from(new Array(9));

  const cells = cellValues.map((cell, i) => {
    return (
      <Cell
        key={`${(Math.random() * i).toFixed(2)}`}
        value={cell}
        clicked={() => cellClicked(i)}
      />
    );
  });
  return <div id="board">{cells}</div>;
};

export default Board;
