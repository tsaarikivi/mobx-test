import React from 'react'
import { observer } from 'mobx-react'

@observer
export default class TodoItem extends React.Component {
  render() {
    const {todo} = this.props
    return (
      <li
        onDoubleClick={() => this.onRename(todo)}
      >
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => this.onToggleCompleted(todo)}
        />
        {todo.task}
        <button
          onClick={() => this.onDelete(todo)}
        >
          Delete
        </button>
      </li>
    )
  }

  onToggleCompleted(todo) {
    this.props.store.toggelCompleted(todo)
  }

  onRename(todo) {
    const newTask = prompt('Muuta', todo.task) || todo.task
    this.props.store.renameTodo(newTask, todo)
  }

  onDelete(todo) {
    this.props.store.deleteTodo(todo)
  }
}
