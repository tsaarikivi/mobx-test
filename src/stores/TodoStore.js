import {observable} from 'mobx'

import * as dbh from '../helpers/database'

export default class TodoStore {

  @observable state = {
    todos: []
  }

  fetchTodos() {
    dbh.onRef('todos', this.state.todos)
  }

  offTodos() {
    dbh.offRef('todos')
  }

  addTodo(task) {
    const todo = {
      task,
      completed: false
    }
    dbh.pushRef('todos', todo)
  }

  renameTodo(newTask, todo) {
    dbh.updateRef('todos', {task: newTask}, todo.key)
  }

  toggelCompleted(todo) {
    dbh.updateRef('todos', {completed: !todo.completed}, todo.key)
  }

  deleteTodo(todo) {
    dbh.deleteRef('todos', todo.key)
  }
}
