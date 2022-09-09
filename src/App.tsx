import React, { useState, useEffect } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import Task from "./models/Task";
import { Container } from "@mui/system";
import { ToastContainer } from "react-toastify";

function App() {
	const [tasks, setTasks] = useState<Task[]>([]);

	// Loads a list of tasks on start
	useEffect(() => {
		setTasks((prevTasks) => [
			{ id: 1, name: "Task 1", description: "Task 1" },
		]);
	}, []);

	return (
		<React.Fragment>
			<ToastContainer
				theme="colored"
				position="top-center"
				autoClose={1500}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/>
			<Header />
			<Container sx={{ marginY: 5 }}>
				<TaskForm setTasks={setTasks} />
				<TaskList taskList={tasks} />
			</Container>
			<Footer />
		</React.Fragment>
	);
}

export default App;
