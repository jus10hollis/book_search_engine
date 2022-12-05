import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      savedBooks {
        bookId
        description
        authors
        image
        link
        title
      }
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      savedBooks {
        bookId
        description
        authors
        image
        link
        title
      }
      user {
        _id
        username
      }
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation saveBook($description: String!) {
    saveBook(description: $description) {
      bookId
      description
      authors
      image
      link
      title
    }
  }
`;

export const REMOVE_BOOK = gql`
  mutation deleteBook($bookId: ID!) {
    deleteBook(bookId: $bookId) {
      bookId
      description
      authors
      image
      link
      title
    }
  }
`;
