import React from "react";

const Alert = ({ type, children }) => {
	return (
		<div role="alert" className={`alert alert-${type} flex align-middle justify-center`}>
			{children}
		</div>
	);
};

export default Alert;
