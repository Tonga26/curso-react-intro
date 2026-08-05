import React from 'react';
import './TodosError.css';

function TodosError() {
  return (
    <div className="TodosError-container">
      <p className="TodosError-text">⚠️ Error cargando los TODOs</p>
    </div>
  );
}

export { TodosError };