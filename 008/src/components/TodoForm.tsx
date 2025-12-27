import { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_TODO } from "../graphql/mutations";
import { GET_TODOS } from "../graphql/queries";

const TodoForm = () => {
	const [title, setTitle] = useState("");
	const [errorMessage, setErrorMessage] = useState<string | null>(null);

	const [createTodo, { loading }] = useMutation(CREATE_TODO, {
		refetchQueries: [{ query: GET_TODOS }],
	});

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setErrorMessage(null);

		if (!title.trim()) {
			return;
		}

		try {
			await createTodo({
				variables: { input: { title: title.trim() } },
			});
			setTitle("");
		} catch (e) {
			if (e instanceof Error) {
				setErrorMessage(e.message);
			} else {
				setErrorMessage("ToDo の作成に失敗しました");
			}
		}
	};

	return (
		<div className="mb-4">
			<form onSubmit={handleSubmit} className="flex gap-2">
				<input
					type="text"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
					placeholder="新しい ToDo を入力..."
					className="input input-bordered flex-1"
					disabled={loading}
				/>
				<button type="submit" className="btn btn-primary" disabled={loading}>
					{loading ? "追加中..." : "追加"}
				</button>
			</form>
			{errorMessage && (
				<div className="alert alert-error mt-2">
					<span>{errorMessage}</span>
				</div>
			)}
		</div>
	);
};

export default TodoForm;
