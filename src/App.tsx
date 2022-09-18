import { useState, useEffect } from "react";
import Container from "@mui/system/Container";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AddTask from "./pages/AddTask";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Task from "./models/Task";

const axios = require("axios").default;

function App() {
	const [tasks, setTasks] = useState<Task[]>([]);

	useEffect(() => {
		const getTasks = async () => {
			let returnedTasks = await axios({
				method: "get",
				url: "http://localhost:8000/tasks",
			});
			setTasks(returnedTasks.data.tasks);
		};
		getTasks();
	}, [setTasks]);

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
