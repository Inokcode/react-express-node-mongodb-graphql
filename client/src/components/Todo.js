import React from 'react';
import moment from 'moment';

const Todo = ({ title, date, details }) => {
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
      <p className="mb-1">{details}</p>
    </a>
  );
};

export default Todo;
