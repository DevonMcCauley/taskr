const Button = (props) => {
	return (
		<button type="button" className="btn btn-primary w-100">
			{props.text}
		</button>
	);
};

export default Button;
