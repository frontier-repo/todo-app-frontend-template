import { gql } from "@apollo/client";

export const GET_TODOS = gql`
	query GetTodos {
		todos {
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

export const GET_TODOS_CONNECTION = gql`
	query GetTodosConnection($first: Int, $after: String) {
		todosConnection(first: $first, after: $after) {
			edges {
				node {
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
				cursor
			}
			pageInfo {
				hasNextPage
				endCursor
			}
			totalCount
		}
	}
`;

export const GET_CATEGORIES = gql`
	query GetCategories {
		categories {
			id
			name
		}
	}
`;

export const GET_TAGS = gql`
	query GetTags {
		tags {
			id
			name
		}
	}
`;
