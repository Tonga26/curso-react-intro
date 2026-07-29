import './TodoItem.css';

function TodoItem(props) {
  return (
    <li className="TodoItem">
      <span className="Icon Icon-check">V</span>
      <p className="TodoItem-p">{props.text}</p>
      <span className="Icon Icon-delete">X</span>
    </li>
  );
}

export { TodoItem };