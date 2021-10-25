import './App.css';
import { useQuery } from '@apollo/client';
import { GET_TODOS } from './graphql/Query';
import moment from 'moment';
import AddTodo from './components/AddTodo';
import Todo from './components/Todo';

function App() {
  const { loading, error, data } = useQuery(GET_TODOS);
  if (loading) return <p>Loading</p>;
  if (error) return <p>{error.message}</p>;
  //
  console.log(data);
  return (
    <div className="container">
      <AddTodo />
      <div></div>
      <div className="list-group">
        {data?.getTodos.map((todo) => (
          <Todo
            key={todo.id}
            title={todo.title}
            details={todo.details}
            date={todo.date}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
