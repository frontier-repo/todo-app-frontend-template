import { useQuery } from "@apollo/client";
import { GET_TODOS } from "./graphql/queries";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import Loading from "./components/Loading";
import ErrorMessage from "./components/ErrorMessage";
import type { GetTodosData } from "./types";

const App = () => {
	const { data, loading, error, refetch } = useQuery<GetTodosData>(GET_TODOS);

	if (loading) {
		return (
			<div className="min-h-screen bg-base-100 flex items-center justify-center">
				<Loading message="ToDo を読み込んでいます..." />
			</div>
		);
	}

	if (error) {
		return (
			<div className="min-h-screen bg-base-100 flex items-center justify-center">
				<ErrorMessage message={error.message} onRetry={() => refetch()} />
			</div>
		);
	}

	return (
		<div className="min-h-screen bg-base-100">
			<div className="container mx-auto max-w-2xl p-4">
				<h1 className="text-4xl font-bold text-center mb-8">Todo App</h1>
				<TodoForm />
				<TodoList todos={data?.todos ?? []} />
			</div>
		</div>
	);
};

export default App;
