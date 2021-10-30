import './App.css';
import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_TODOS } from './graphql/Query';
import moment from 'moment';
import AddTodo from './components/AddTodo';
import Todo from './components/Todo';
import { TodoContext } from './TodoContext';

function App() {
  //
  const [selectedId, setSelectedId] = useState(0);
  //
  const { loading, error, data } = useQuery(GET_TODOS);
  if (loading) return <p>Loading</p>;
  if (error) return <p>{error.message}</p>;
  //
  console.log(data);
  return (
    <TodoContext.Provider value={{ selectedId, setSelectedId }}>
      <div className="container">
        <AddTodo />
        <div></div>
        <div className="list-group">
          {data?.getTodos.map((todo) => (
            <Todo
              key={todo.id}
              id={todo.id}
              title={todo.title}
              details={todo.details}
              date={todo.date}
            />
          ))}
        </div>
      </div>
    </TodoContext.Provider>
  );
}

export default App;
