import Header from "./Layout/Header/Header";
import Input from "./components/Input";
import Footer from "./Layout/Footer/Footer";
import { Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

function App() {
	return (
		<Fragment>
			<Header />
			<Input />
			<Footer />
		</Fragment>
	);
}

export default App;
