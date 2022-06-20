import Header from "./Layout/Header/Header";
import Footer from "./Layout/Footer/Footer";
import { Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import TaskInput from "./components/Tasks/TaskInput";
import TaskList from "./components/Tasks/TaskList";

//TODO: Add routing 
function App() {
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
