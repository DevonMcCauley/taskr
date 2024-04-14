"use client";
import TaskForm from "@/components/TaskForm";
import TaskList from "@/components/TaskList";
import { useUser } from "@clerk/nextjs";
import { getToken } from "next-auth/jwt";
import { useEffect, useState } from "react";

export default function Home() {
	const [tasks, setTasks] = useState([]);
	const { user } = useUser();

	// Generate clerk JWT

	const apiURL = process.env.NEXT_PUBLIC_API_URL;

	// TODO: Refactor this to not be so messy or find a better way to handle this
	// useEffect(() => {
	// 	user && createUserProfile();
	// 	getTasks();
	// }, [user]);

	// Gets the tasks from the backend
	const getTasks = async () => {
		const response = await fetch(`${apiURL}/tasks`, {
			credentials: "include",
		});

		const data = await response.json();
		setTasks(data);
	};

	const createUserProfile = async () => {
		// If the user is signed in, make a call to the backend to create/update the user
		if (localStorage.getItem("isLogin") !== "true") {
			if (user) {
				console.log("hit this part");
				console.log(user);
				const response = await fetch(`${apiURL}/users`, {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						firstName: user.firstName,
						lastName: user.lastName,
						email: user?.primaryEmailAddress?.emailAddress,
						image: user.imageUrl,
						clerkID: user.id,
					}),
				});

				const data = await response.json();
				console.log(data);
			}
			localStorage.setItem("isLogin", "true");
		}
	};

	return (
		<div>
			<TaskForm />

			<hr className="mt-5 mx-[10%]" />

			<TaskList />
		</div>
	);
}
