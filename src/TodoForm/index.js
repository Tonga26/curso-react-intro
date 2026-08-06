import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoForm.css';

function TodoForm() {
    const {
        addTodo,
        setOpenModal
    } = React.useContext(TodoContext);

    const [emptyError, setEmptyError] = React.useState(false);

    const [newTodoValue, setNewTodoValue] = React.useState('');

    const onSubmit = (event) => {
        event.preventDefault();

        if (newTodoValue.trim().length === 0) {
            setEmptyError(true); 
            return;
        }

        addTodo(newTodoValue.trim());
        setOpenModal(false);
    }

    const onCancel = () => {
        setOpenModal(false);
    }

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
        if (emptyError) {
            setEmptyError(false);
        }
    }

    return (
        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo TODO</label>
            <textarea
                placeholder="Cortar cebolla para el almuerzo"
                value={newTodoValue}
                onChange={onChange}
            />
            {emptyError && (
                <p className="TodoForm-errorMessage">
                    ⚠️ Debes escribir una tarea para poder agregarla.
                </p>
            )}
            <div className='TodoForm-buttonContainer'>
                <button
                    type='button'
                    className='TodoForm-button TodoForm-button--cancel'
                    onClick={onCancel}
                >Cancelar
                </button>
                <button
                    type='submit'
                    className='TodoForm-button TodoForm-button--add'
                >Añadir
                </button>
            </div>
        </form>
    )
}

export { TodoForm };