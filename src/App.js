import Header from "./components/Layout/Header/Header";
import Footer from "./components/Layout/Footer/Footer";
import { Fragment, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import TaskInput from "./components/Tasks/TaskInput";
import TaskList from "./components/Tasks/TaskList";
import "react-toastify/dist/ReactToastify.css";
import { fetchTaskData } from "./app/task-actions";
import { useDispatch } from "react-redux";

//TODO: Add routing
function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchTaskData());
	}, [dispatch]);

	return (
		<Fragment>
			<Header />
			<div className="container">
				<TaskInput />
				<TaskList />
			</div>

			<Footer />
		</Fragment>
	);
}

export default App;
