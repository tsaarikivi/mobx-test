import React from 'react'
import { observer } from 'mobx-react'

import TodoItem from './TodoItem.jsx'

@observer
export default class TodoList extends React.Component {
  componentWillMount() {
    this.props.store.fetchTodos()
  }

  componentWillUnmount() {
    this.props.store.offTodos()
  }

  render() {
    return (
      <div>
        TodoList
        <ul>{this.renderTodos()}</ul>
        <button onClick={() => this.onNewTodo()}>New Todo</button>
        <small>(double-click a todo to edit)</small>
      </div>
    )
  }

  renderTodos() {
    const {store} = this.props
    return store.state.todos.map(
      todo => <TodoItem todo={todo} key={todo.key} store={store}/>
    )
  }

  onNewTodo() {
    this.props.store.addTodo(prompt('Enter a new todo:','coffee plz'))
  }
}
