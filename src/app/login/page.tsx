"use client";
import React, { useState, useEffect } from "react";
import { useUser } from "@/contexts/UserContext";
import { useRouter } from "next/navigation";
import { login } from "@/actions/userActions";

const SignInPage: React.FC = () => {
	const apiURL = process.env.NEXT_PUBLIC_API_URL;
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const { user, setUser } = useUser();

	const router = useRouter();

	const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(e.target.value);
	};

	const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setPassword(e.target.value);
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		// If the data has an id, it means the user is logged in
		const data = await login(email, password);
		if (data.id) {
			const { firstName, lastName, email, id } = data;
			setUser({ firstName, lastName, email, id });
			router.push("/");
		}
	};

	return (
		<div>
			<h2>Sign In</h2>
			<form onSubmit={handleSubmit}>
				<div>
					<label>Email:</label>
					<input type="email" value={email} onChange={handleEmailChange} />
				</div>
				<div>
					<label>Password:</label>
					<input
						type="password"
						value={password}
						onChange={handlePasswordChange}
					/>
				</div>
				<button type="submit">Sign In</button>
			</form>
		</div>
	);
};

export default SignInPage;
