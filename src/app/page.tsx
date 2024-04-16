"use client";
import { useEffect, useState } from "react";
import TaskForm from "@/components/TaskForm";
import TaskList from "@/components/TaskList";
import { getTasks, deleteTask } from "../actions/taskActions";
import { useUser } from "@/contexts/UserContext";
import { redirect } from "next/navigation";

export default function Home() {
	const [tasks, setTasks] = useState([]);
	const { user } = useUser();

	useEffect(() => {
		loadTasks();
		console.log(user);

		// If the user is not logged in, redirect to the login page
		if (!user) {
			redirect("/login");
		}
	}, []);

	// Gets the tasks from the backend
	const loadTasks = async () => {
		const task = await getTasks();
		setTasks(task);
	};

	const removeTask = async (task: any) => {
		await deleteTask(task);
		loadTasks();
	};

	return (
		<div>
			<TaskForm loadTasks={loadTasks} />

			<hr className="mt-5 max-w-xl mx-auto" />

			{tasks && <TaskList tasks={tasks} onTaskClick={removeTask} />}
		</div>
	);
}
