import { gql } from '@apollo/client';
export const ADD_TODO = gql`
  mutation addTodo($title: String, $details: String, $date: Date) {
    addTodo(title: $title, details: $details, date: $date) {
      id
      title
      details
      date
    }
  }
`;

export const DELETE_TODO = gql`
  mutation deleteTodo($id: ID) {
    deleteTodo(id: $id)
  }
`;
