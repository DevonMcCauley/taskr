import Input from "../UI/Input";
import { useDispatch } from "react-redux";
import Button from "../UI/Button";
import { useRef, useState } from "react";
import Modal from "../UI/Modal/Modal";
import { ToastContainer, toast } from "react-toastify";

// Returns an input field and a button to allow the user to add a task
const TaskInput = () => {
	const [modalIsOpen, setModalIsOpen] = useState(false);
	// const dispatch = useDispatch();
	const taskNameRef = useRef("");
	const taskDescRef = useRef("");
	const notify = () =>
		toast("Task added!", {
			theme: "colored",
			type: "success",
		});

	// Calls the Redux addTask() function to add a task to the task list
	const addTaskHandler = () => {
		const taskName = taskNameRef.current.value;
		const taskDescription = taskDescRef.current.value;

		// Checks that the user entered task info
		if (taskName === "" || taskDescription === "") {
			setModalIsOpen(true);
			return;
		}

		// TODO: The TaskID should be generated from the database
		const min = Math.ceil(1);
		const max = Math.floor(10000);
		const newTaskId = Math.floor(Math.random() * (max - min + 1)) + min;
		const task = {
			id: newTaskId,
			title: taskName,
			description: taskDescription,
		};
		taskNameRef.current.value = "";
		taskDescRef.current.value = "";
		// dispatch(addTask(task));
		notify();
	};

	const modal = (
		<Modal
			handleClose={() => setModalIsOpen(false)}
			modalIsOpen={modalIsOpen}
			title="Invalid"
		>
			Enter valid task information
		</Modal>
	);

	const toastMessage = (
		<ToastContainer
			position="top-center"
			autoClose={2000}
			hideProgressBar={false}
			newestOnTop={false}
			closeOnClick
			rtl={false}
			pauseOnFocusLoss
			draggable
			pauseOnHover
		/>
	);

	return (
		<div className="row mt-4 mx-2">
			<div className="col-12">
				<div className="row g-2">
					<Input
						inputRef={taskNameRef}
						placeholderText={"Task Name"}
					/>
					<Input
						inputRef={taskDescRef}
						placeholderText={"Task Description"}
					/>
				</div>
			</div>
			<div className="col mt-3">
				<Button text={"Add"} onClick={addTaskHandler} />
			</div>
			{modal}
			{toastMessage}
		</div>
	);
};

export default TaskInput;
