import React from "react";

const ListItem = ({ task, onClick }) => {
	const handleClick = () => {
		onClick(task.id);
	};

	const completedTask = task.completed ? "line-through bg-gray-400" : "";

	return (
		<li
			className={`items-center ${completedTask} gap-x-2 py-3 px-4 text-sm bg-white border border-gray-200 text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg hover:bg-gray-200`}
			onClick={handleClick}
		>
			<div className="font-bold"> {task.name}</div>
			<div className="">{task.description}</div>
		</li>
	);
};

export default ListItem;
