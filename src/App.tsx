import { useState, useEffect } from "react";
import Container from "@mui/system/Container";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AddTask from "./pages/AddTask";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Task from "./models/Task";

function App() {
	const [tasks, setTasks] = useState<Task[]>([]);

	// Loads a list of tasks on start
	useEffect(() => {
		setTasks((prevTasks) => [
			{ id: 1, name: "Task 1", description: "Task 1" },
			{ id: 2, name: "Task 2", description: "Task 2" },
			{ id: 3, name: "Task 3", description: "Task 3" },
			{ id: 4, name: "Task 4", description: "Task 4" },
			{ id: 5, name: "Task 5", description: "Task 5" },
			{ id: 6, name: "Task 6", description: "Task 6" },
		]);
	}, []);

	return (
		<BrowserRouter>
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
			<Container sx={{ marginY: 1 }}>
				<Routes>
					<Route
						path="/"
						element={<AddTask tasks={tasks} setTasks={setTasks} />}
					/>
				</Routes>
			</Container>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
