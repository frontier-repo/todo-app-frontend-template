import { gql } from "@apollo/client";

export const CREATE_TODO = gql`
  mutation CreateTodo($input: CreateTodoInput!) {
    createTodo(input: $input) {
      id
      title
      completed
      category {
        id
        name
      }
      tags {
        id
        name
      }
    }
  }
`;

export const UPDATE_TODO = gql`
  mutation UpdateTodo($id: ID!, $input: UpdateTodoInput!) {
    updateTodo(id: $id, input: $input) {
      id
      title
      completed
      category {
        id
        name
      }
      tags {
        id
        name
      }
    }
  }
`;

export const DELETE_TODO = gql`
  mutation DeleteTodo($id: ID!) {
    deleteTodo(id: $id) {
      id
    }
  }
`;

export const CREATE_TAG = gql`
  mutation CreateTag($name: String!) {
    createTag(name: $name) {
      id
      name
    }
  }
`;

export const DELETE_TAG = gql`
  mutation DeleteTag($id: ID!) {
    deleteTag(id: $id) {
      id
    }
  }
`;

export const CREATE_CATEGORY = gql`
  mutation CreateCategory($name: String!) {
    createCategory(name: $name) {
      id
      name
    }
  }
`;

export const DELETE_CATEGORY = gql`
  mutation DeleteCategory($id: ID!) {
    deleteCategory(id: $id) {
      id
    }
  }
`;

export const ADD_TAG_TO_TODO = gql`
  mutation AddTagToTodo($todoId: ID!, $tagId: ID!) {
    addTagToTodo(todoId: $todoId, tagId: $tagId) {
      id
      tags {
        id
        name
      }
    }
  }
`;
