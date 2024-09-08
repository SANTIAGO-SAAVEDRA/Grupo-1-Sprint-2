export const Spinner = () => {
	return (
		<div
			onClick={(e) => {
				e.target.classList.add('spinner-hidden');
			}}
			className="spinner"></div>
	);
};
