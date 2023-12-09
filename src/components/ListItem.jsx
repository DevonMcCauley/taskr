import React from "react";

const ListItem = ({ task, deleteTask }) => {
	const handleClick = () => {
		deleteTask(task.id);
	};
	return (
		<li
			className=" items-center gap-x-2 py-3 px-4 text-sm bg-white border border-gray-200 text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg hover:bg-gray-200 "
			onClick={handleClick}
		>
			<div className="font-bold"> {task.name}</div>
			<div className="">{task.description}</div>
		</li>
	);
};

export default ListItem;
