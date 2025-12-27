type Props = {
	message?: string;
};

const Loading = ({ message = "読み込み中..." }: Props) => {
	return (
		<div className="flex flex-col items-center justify-center py-12">
			<span className="loading loading-spinner loading-lg text-primary" />
			<p className="mt-4 text-base-content/70">{message}</p>
		</div>
	);
};

export default Loading;
