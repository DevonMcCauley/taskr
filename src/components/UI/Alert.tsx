import React from "react";


type AlertProps = {
	type: 'info' | 'warning' | 'error' | 'success',
	children: React.ReactNode,
  };




const Alert = ({ type, children }: AlertProps) => {
	const alertClass = `flex align-middle justify-center alert alert-${type}`;

	return (
		<div role="alert" className={alertClass}>
			{children}
		</div>
	);
};

export default Alert;
