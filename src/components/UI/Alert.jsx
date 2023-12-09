import React from "react";

const Alert = ({ type, children }) => {
	return (
		<div role="alert" className={`flex align-middle justify-center alert alert-${type}`}>
			{children}
		</div>
	);
};

export default Alert;
