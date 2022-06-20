import Header from "./Layout/Header/Header";
import Input from "./components/Input";
import Footer from "./Layout/Footer/Footer";
import { Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Button from "./components/Button";
import TaskList from "./components/Tasks/TaskList";

function App() {
	return (
		<Fragment>
			<Header />
			<div className="container">
				<div className="row mt-4">
					<div className="col-10">
						<Input />
					</div>
					<div className="col">
						<Button text={"Add"} />
					</div>
				</div>
				<div>
					<TaskList />
				</div>
			</div>
			<Footer />
		</Fragment>
	);
}

export default App;
