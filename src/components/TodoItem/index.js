// Write your code here

import './index.css'

const TodoItem = props => {
  const {todoDetails, onDeleteTodo} = props

  const {title, id} = todoDetails

  const deleteTodoItem = () => {
    onDeleteTodo(id)
  }

  return (
    <li className="list-item">
      <p className="title">{title}</p>
      <button type="button" onClick={deleteTodoItem} className="delete-btn">
        Delete
      </button>
    </li>
  )
}

export default TodoItem
