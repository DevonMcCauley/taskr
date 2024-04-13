"use client";
import { UserButton, useUser } from "@clerk/nextjs";
import { useEffect } from "react";

export default function Home() {
	const { user } = useUser();

	const apiURL = process.env.NEXT_PUBLIC_API_URL;

	useEffect(() => {
		user && createUserProfile();
	}, [user]);

	const createUserProfile = async () => {
		// If the user is signed in, make a call to the backend to create/update the user
		if (localStorage.getItem("isLogin") !== "true") {
			if (user) {
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
					}),
				});
			}
			localStorage.setItem("isLogin", "true");
		}
	};

	return (
		<div>
			Home Page
			<UserButton />
		</div>
	);
}
