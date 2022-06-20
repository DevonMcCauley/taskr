import { taskActions } from "./taskSlice";
import axios from "axios";

const BASE_URL = process.env.REACT_APP_DB_URL;

export const fetchTaskData = () => {
	return async (dispatch) => {
		const fetchData = async () => {
			const response = await axios(BASE_URL + "/tasks.json");

			const data = await response.data;
			return data;
		};

		try {
			const taskData = await fetchData();
			dispatch(
				taskActions.replaceTaskList({
					taskList: taskData,
				})
			);
		} catch (err) {
			console.log(err);
		}
	};
};

export const postTaskData = () => {
	return async (dispatch) => {
		const postData = async () => {
			const response = await axios({
				method: "POST",
				url: BASE_URL + "/tasks.json",
				data: {
					id: 5,
					title: "testing this post task",
					description: "this is a test description",
				},
			});

			const data = await response.data;
			return data;
		};
		try {
			const taskData = await postData();
			console.log(taskData);
			dispatch(taskActions.addTask({}));
		} catch (err) {
			console.log(err);
		}
	};
};
