import './Cell.css';

import cn from 'classnames';

const Cell = ({ value = '', isWinner = false }) => {
  const cellWrapper = cn({
    cell: true,
    winner: isWinner,
  });
  const cellClass = cn({ 'cell-content': true, populated: value });

  return (
    <button className={cellWrapper}>
      <span className={cellClass}>{value}</span>
    </button>
  );
};

export default Cell;
