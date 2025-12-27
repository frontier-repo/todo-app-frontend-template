import { gql } from "@apollo/client";

export const CREATE_TODO = gql`
	mutation CreateTodo($input: CreateTodoInput!) {
		createTodo(input: $input) {
			id
			title
			completed
			createdAt
		}
	}
`;

export const TOGGLE_TODO = gql`
	mutation ToggleTodo($id: ID!) {
		toggleTodo(id: $id) {
			id
			completed
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
