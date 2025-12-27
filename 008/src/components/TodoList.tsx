import TodoItem from "./TodoItem";
import type { Todo } from "../types";

type Props = {
	todos: Todo[];
};

const TodoList = ({ todos }: Props) => {
	if (todos.length === 0) {
		return (
			<div className="text-center text-base-content/50 py-8">
				ToDo がありません
			</div>
		);
	}

	return (
		<div className="flex flex-col gap-2">
			{todos.map((todo) => (
				<TodoItem key={todo.id} todo={todo} />
			))}
		</div>
	);
};

export default TodoList;
