import './Cell.css';

import cn from 'classnames';

const Cell = ({ value = '', canHighlight, clicked }) => {
  const cellWrapper = cn({
    cell: true,
    winner: canHighlight,
  });
  const cellClass = cn({ 'cell-content': true, populated: value });

  return (
    <button className={cellWrapper} onClick={clicked}>
      <span className={cellClass}>{value}</span>
    </button>
  );
};

export default Cell;
