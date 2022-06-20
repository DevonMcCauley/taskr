// Custom input component
const Input = (props) => {
	return (
		<input
			className="form-control"
			placeholder={props.placeholderText}
			ref={props.inputRef}
		/>
	);
};

export default Input;
