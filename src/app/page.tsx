"use client";
import { useEffect, useState } from "react";
import TaskForm from "@/components/TaskForm";
import TaskList from "@/components/TaskList";
import { getTasks, deleteTask } from '@/actions/taskActions';
import { useUser } from "@/contexts/UserContext";
import { useRouter } from "next/navigation";

export default function Home() {
	const [tasks, setTasks] = useState([]);
	const { user } = useUser();
	const router = useRouter();

	useEffect(() => {
		if (!user) {
			router.push("/login");
		} else {
			loadTasks();
		}
	}, [user]);

	// Gets the tasks from the backend
	const loadTasks = async () => {
		const task = await getTasks();
		setTasks(task);
	};

	const removeTask = async (task: any) => {
		await deleteTask(task);
		await loadTasks();
	};

	return (
			<div>
				<TaskForm loadTasks={loadTasks} />

				<hr className="mt-5 max-w-xl mx-auto" />

				{tasks && <TaskList tasks={tasks} onTaskClick={removeTask} />}
			</div>
	);
}