import React from 'react';
import moment from 'moment';
import { useMutation } from '@apollo/client';
import { DELETE_TODO } from '../graphql/Mutation';
import { GET_TODOS } from '../graphql/Query';

const Todo = ({ id, title, details, date }) => {
  const [deleteTodo] = useMutation(DELETE_TODO);
  //
  const removeTodo = (id) => {
    deleteTodo({
      variables: {
        id: id,
      },
      refetchQueries: [{ query: GET_TODOS }],
    });
  };
  //
  return (
    <a
      href="#"
      className="list-group-item list-group-item-action active"
      aria-current="true"
    >
      <div className="d-flex w-100 justify-content-between">
        <h5 className="mb-1">{title}</h5>
        <small>{moment(date).format('YYYY-MM-DD')}</small>
      </div>
      <div className="d-flex w-100 justify-content-between">
        <p className="mb-1">{details}</p>
        <small onClick={() => removeTodo(id)}>DELETE</small>
      </div>
    </a>
  );
};

export default Todo;
