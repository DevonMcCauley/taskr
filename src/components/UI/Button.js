// Custom button component
const Button = (props) => {
	return (
		<button
			type="button"
			className="btn btn-primary w-100"
			onClick={props.onClick}
		>
			{props.text}
		</button>
	);
};

export default Button;
