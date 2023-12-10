import { Task } from "@/types/task";


type ListItemProps = {
	task: Task;
	onClick: (id: number) => void;
};

const ListItem: React.FC<ListItemProps> = ({ task, onClick }) => {
	const handleClick = () => {
		onClick(task.id);
	};

	const completedTask = task.completed ? "line-through bg-gray-400" : "";

	return (
		<li
			className={`items-center ${completedTask} gap-x-2 py-3 px-4 text-sm bg-white border border-gray-200 text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg hover:bg-gray-200`}
			onClick={handleClick}
			onKeyUp={(e) => {
				if (e.key === "Enter") {
					handleClick();
				}
			}}
			role="button"
			tabIndex={0}
		>
			<div className="font-bold"> {task.name}</div>
			<div className="">{task.description}</div>
		</li>
	);
};

export default ListItem;
