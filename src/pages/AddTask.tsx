import { Fragment } from "react";
import Task from "../models/Task";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import Grid from "@mui/material/Grid";

interface IAddTask {
	tasks: Task[];
	setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}
// The AddTask page
const AddTask = ({ tasks, setTasks }: IAddTask) => {
	return (
		<Fragment>
			<Grid container>
				<TaskForm setTasks={setTasks} />
				<TaskList taskList={tasks} setTasks={setTasks} />
			</Grid>
		</Fragment>
	);
};

export default AddTask;
