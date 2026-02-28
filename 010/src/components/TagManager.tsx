import { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { GET_TAGS } from "../graphql/queries";
import { GET_TODOS } from "../graphql/queries";
import { CREATE_TAG, DELETE_TAG } from "../graphql/mutations";
import { Tag } from "../types";

export const TagManager = () => {
	const [name, setName] = useState("");
	const { data } = useQuery<{ tags: Tag[] }>(GET_TAGS);
	const [createTag] = useMutation(CREATE_TAG, {
		refetchQueries: [{ query: GET_TAGS }],
	});
	const [deleteTag] = useMutation(DELETE_TAG, {
		refetchQueries: [{ query: GET_TAGS }, { query: GET_TODOS }],
	});

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (name.trim()) {
			createTag({ variables: { name: name.trim() } });
			setName("");
		}
	};

	const handleDelete = (id: string) => {
		deleteTag({ variables: { id } });
	};

	return (
		<div className="card bg-base-200 p-4">
			<h2 className="text-lg font-bold mb-2">タグ管理</h2>
			<form onSubmit={handleSubmit} className="flex gap-2 mb-4">
				<input
					type="text"
					className="input input-bordered input-sm flex-1"
					placeholder="新しいタグ名"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
				<button
					type="submit"
					className="btn btn-secondary btn-sm"
					disabled={!name.trim()}
				>
					追加
				</button>
			</form>
			<div className="flex flex-wrap gap-2">
				{data?.tags.map((tag) => (
					<div key={tag.id} className="badge badge-secondary badge-outline gap-1">
						{tag.name}
						<button
							className="text-error font-bold"
							onClick={() => handleDelete(tag.id)}
						>
							×
						</button>
					</div>
				))}
			</div>
		</div>
	);
};
