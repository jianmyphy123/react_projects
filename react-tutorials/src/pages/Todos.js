import React from 'react';
import Todo from '../components/Todo';
import * as TodoActions from '../actions/TodoActions';
import TodoStore from '../stores/TodoStore';

class Todos extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: TodoStore.getAll()
    };
    this.getTodos = this.getTodos.bind(this);
  }

  componentWillMount() {
    TodoStore.on('change', this.getTodos);

    console.log('count', TodoStore.listenerCount('change'));
  }

  componentWillUnmount() {
    TodoStore.removeListener('change', this.getTodos );
  }

  getTodos() {
    this.setState({
      todos: TodoStore.getAll()
    });
  }

  createTodo() {
    TodoActions.createTodo(Date.now());
  }

  reloadTodos() {
    TodoActions.reloadTodos();
  }

  render() {

    const { todos } = this.state;

    const TodoComponents = todos.map((todo) => {
      return <Todo key={todo.id} {...todo} />;
    });
    return (
      <div>
        <button onClick={this.createTodo.bind(this)}>Create!</button>
        <button onClick={this.reloadTodos.bind(this)}>Reload!</button>
        <h1>Todos</h1>
        <div>{TodoComponents}</div>
      </div>
    );
  }
}

export default Todos;
