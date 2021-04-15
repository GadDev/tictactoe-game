import './Cell.css';
const Cell = ({ value = '' }) => {
  let cellClass = 'cell-content';
  return (
    <button className="cell">
      <span className={cellClass}>{value}</span>
    </button>
  );
};

export default Cell;
