import './TodoCounter.css';

function TodoCounter({ total, completed }) {
  return (
    total === completed ?
    (
      <h2 className="TodoCounter TodoCounter--completed">
        🎉 ¡Felicitaciones! Has completado todos tus TODOs 🏆
      </h2>
    ) : (
      <h1 className="TodoCounter">
        Has completado <span>{completed}</span> de <span>{total}</span> TODOS
      </h1>
    )
  );
}

export { TodoCounter };