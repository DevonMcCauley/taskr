import React from "react";

const ListItem = ({ task, deleteTask }) => {
	const handleClick = () => {
		deleteTask(task.id);
	};
	return (
		<li className="bg-fuchsia-100 border-solid border-2 border-sky-500 rounded-md mb-2 p-3" onClick={handleClick}>
			<div className="font-bold text-lg"> {task.name}</div>
			<div className="">{task.description}</div>
		</li>
	);
};

export default ListItem;
