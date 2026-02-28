export type Category = {
	id: string;
	name: string;
};

export type Tag = {
	id: string;
	name: string;
};

export type Todo = {
	id: string;
	title: string;
	completed: boolean;
	category?: Category;
	tags: Tag[];
};

export type TodoEdge = {
	node: Todo;
	cursor: string;
};

export type PageInfo = {
	hasNextPage: boolean;
	endCursor: string | null;
};

export type TodoConnection = {
	edges: TodoEdge[];
	pageInfo: PageInfo;
	totalCount: number;
};
