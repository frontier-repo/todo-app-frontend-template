type Props = {
	message: string;
	onRetry?: () => void;
};

const ErrorMessage = ({ message, onRetry }: Props) => {
	return (
		<div className="flex flex-col items-center justify-center py-12">
			<div className="text-error text-5xl mb-4">⚠️</div>
			<h2 className="text-xl font-bold text-error mb-2">エラーが発生しました</h2>
			<p className="text-base-content/70 mb-4">{message}</p>
			{onRetry && (
				<button onClick={onRetry} className="btn btn-primary">
					再試行
				</button>
			)}
		</div>
	);
};

export default ErrorMessage;
