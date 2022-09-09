import Task from "../models/Task";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import { Fragment } from "react";

interface IAddTask {
	tasks: Task[];
	setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const AddTask = ({ tasks, setTasks }: IAddTask) => {
	return (
		<Fragment>
			<TaskForm setTasks={setTasks} />
			<TaskList taskList={tasks} />
		</Fragment>
	);
};

export default AddTask;
