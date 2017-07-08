import dispatcher from '../dispatcher';

export function createTodo(text) {
  dispatcher.dispatch({
    type: 'CREATE_TODO',
    text,
  });
}

export function deleteTodo(id) {
  dispatcher.dispatch({
    type: 'DELETE_TODO',
    id,
  });
}

export function reloadTodos() {

  setTimeout(() => {
    dispatcher.dispatch({ type: 'RECEIVE_TODOS', todos: [
    {
      id: 8448484848448,
      text: "Go Shopping Again",
      complete: false,
    },
    {
      id: 676767676762727,
      text: "Huge Wife",
      complete: true,
    },
  ]});
  }, 1000);
}
