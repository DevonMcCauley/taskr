import * as React from "react";
import Box from "@mui/material/Box";
import Task from "../models/Task";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";

interface ITaskListProps {
	taskList: Task[];
	setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const TaskList = ({ taskList, setTasks }: ITaskListProps) => {
	const [checked] = React.useState([0]);

	const handleChecked = (value: number) => () => {
		// Filters out the selected task
		let tasks = taskList.filter((item) => item.id !== value);
		setTasks(tasks);
	};
	// Loops through the task list to create a list of 'li' elements

	return (
		<Box
			display="flex"
			width="100%"
			alignItems="center"
			justifyContent="center"
			marginTop={3}
		>
			<List
				sx={{
					maxWidth: 360,
					bgcolor: "background.paper",
				}}
			>
				{taskList.map((task) => {
					const labelId = `checkbox-list-label-${task}`;

					return (
						<ListItem key={task.id} disablePadding>
							<ListItemButton
								onClick={handleChecked(task.id)}
								dense
							>
								<ListItemIcon>
									<Checkbox
										edge="start"
										checked={
											checked.indexOf(task.id) !== -1
										}
										tabIndex={-1}
										disableRipple
										inputProps={{
											"aria-labelledby": labelId,
										}}
									/>
								</ListItemIcon>
								<ListItemText
									id={labelId}
									primary={`${task.name}`}
								/>
							</ListItemButton>
						</ListItem>
					);
				})}
			</List>
		</Box>
	);
};

export default TaskList;
