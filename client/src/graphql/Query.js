import { gql } from '@apollo/client';

export const GET_TODOS = gql`
  {
    getTodos {
      id
      title
      details
      date
    }
  }
`;

export const GET_TODO = gql`
  query getTodo($id: ID) {
    getTodo(id: $id) {
      id
      title
      details
      date
    }
  }
`;
