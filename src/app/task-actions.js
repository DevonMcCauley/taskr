import { taskActions } from "./taskSlice";
import axios from "axios";

export const fetchTaskData = () => {
	return async (dispatch) => {
		const BASE_URL = process.env.REACT_APP_DB_URL;
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
		} catch (err) {}
	};
};
