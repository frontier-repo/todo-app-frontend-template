import { useMutation } from "@apollo/client";
import { TOGGLE_TODO, DELETE_TODO } from "../graphql/mutations";
import { GET_TODOS } from "../graphql/queries";
import type { Todo } from "../types";

type Props = {
	todo: Todo;
};

const TodoItem = ({ todo }: Props) => {
	const [toggleTodo] = useMutation(TOGGLE_TODO, {
		refetchQueries: [{ query: GET_TODOS }],
	});

	const [deleteTodo, { loading: deleteLoading }] = useMutation(DELETE_TODO, {
		refetchQueries: [{ query: GET_TODOS }],
	});

	const handleToggle = () => {
		toggleTodo({
			variables: { id: todo.id },
		});
	};

	const handleDelete = () => {
		if (window.confirm("本当に削除しますか？")) {
			deleteTodo({
				variables: { id: todo.id },
			});
		}
	};

	return (
		<div className="flex items-center gap-2 p-4 bg-base-200 rounded-lg">
			<input
				type="checkbox"
				checked={todo.completed}
				onChange={handleToggle}
				className="checkbox"
			/>
			<span className={`flex-1 ${todo.completed ? "line-through opacity-50" : ""}`}>
				{todo.title}
			</span>
			<button
				onClick={handleDelete}
				disabled={deleteLoading}
				className="btn btn-ghost btn-sm text-error"
			>
				{deleteLoading ? "削除中..." : "削除"}
			</button>
		</div>
	);
};

export default TodoItem;
