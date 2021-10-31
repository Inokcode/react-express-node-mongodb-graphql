import { useMutation, useQuery } from '@apollo/client';
import moment from 'moment';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { ADD_TODO, UPDATE_TODO } from '../graphql/Mutation';
import { GET_TODO, GET_TODOS } from '../graphql/Query';
import { TodoContext } from '../TodoContext';

const AddTodo = () => {
  //

  const [todo, setTodo] = useState({
    title: '',
    details: '',
    date: '',
  });
  //
  const { selectedId, setSelectedId } = useContext(TodoContext);
  const [updateTodo] = useMutation(UPDATE_TODO);
  //
  const { loading, error, data } = useQuery(GET_TODO, {
    variables: { id: selectedId },
    onCompleted: (data) => setTodo(data.getTodo),
  });
  console.log({ data });
  console.log(data?.getTodo); //reason 22
  //
  const inputAreaRef = useRef();
  useEffect(() => {
    //
    const checkIfClickedOutside = (e) => {
      if (!inputAreaRef.current.contains(e.target)) {
        console.log('Outside input area');
        setSelectedId(0);
      } else {
        console.log('Inside input area');
      }
    };
    document.addEventListener('mousedown', checkIfClickedOutside);
    return () => {
      document.removeEventListener('mousedown', checkIfClickedOutside);
    };
  }, []);

  //
  const [addTodo] = useMutation(ADD_TODO);
  //
  const onSubmit = (e) => {
    e.preventDefault();
    if (todo.title === '') {
      alert('Please enter a title');
      return;
    }
    //
    if (selectedId === 0) {
      addTodo({
        variables: {
          title: todo.title,
          details: todo.details,
          date: todo.date,
        },
        refetchQueries: [{ query: GET_TODOS }],
      });
    } else {
      updateTodo({
        variables: {
          id: selectedId,
          title: todo.title,
          details: todo.details,
          date: todo.date,
        },
        refetchQueries: [{ query: GET_TODOS }],
      });
    }
  };
  //
  return (
    <form onSubmit={onSubmit} ref={inputAreaRef}>
      <div className="mb-3">
        <pre>{JSON.stringify(todo, null, '\t')}</pre>
        <label className="form-label">Title {selectedId}</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter title"
          value={todo.title}
          onChange={(e) => setTodo({ ...todo, title: e.target.value })}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Detail</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter details"
          value={todo.details}
          onChange={(e) => setTodo({ ...todo, details: e.target.value })}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Date</label>
        <input
          type="date"
          className="form-control"
          value={moment(todo.date).format('YYYY-MM-DD')}
          onChange={(e) => setTodo({ ...todo, date: e.target.value })}
        />
      </div>
      <div className="mb-3">
        <button type="submit" className="btn btn-primary">
          {selectedId === 0 ? 'Add' : 'Update'}
        </button>
      </div>
    </form>
  );
};

export default AddTodo;
