import React from 'react'
import { observer } from 'mobx-react'

import TodoList from './todos/TodoList.jsx'
import DevTools from 'mobx-react-devtools'
import TodoStore from '../stores/TodoStore'
const todoStore = new TodoStore()

@observer
export default class App extends React.Component {
  render() {
    return (
      <div>
        <TodoList store={todoStore} />
        <DevTools />
      </div>
    )
  }
}
