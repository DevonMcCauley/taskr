"use client";
import React, { useState } from "react";
import { useUser } from "@/contexts/UserContext";
import { useRouter } from "next/navigation";
import { login } from "@/actions/userActions";
import { Button, Input, Spacer } from "@nextui-org/react";
import toast from "react-hot-toast";

const SignInPage: React.FC = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const { setUser } = useUser();
	const router = useRouter();

	const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(e.target.value);
	};

	const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setPassword(e.target.value);
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		// Validate the email and password
		if (!email) {
			toast.error("Please enter your email");
			return;
		}
		if (!password) {
			toast.error("Please enter your password");
			return;
		}

		// If the data has an id, it means the user is logged in
		const data = await login(email, password);
		if (data.id) {
			const { firstName, lastName, email, id } = data;
			setUser({ firstName, lastName, email, id });
			router.push("/");
		}
	};

	return (
		<div className="flex flex-col items-center justify-center h-screen">
			<h2 className="text-3xl font-bold mb-4">Login</h2>
			<form onSubmit={handleSubmit} className="max-w-sm w-full px-4">
				<Input
					type="email"
					value={email}
					onChange={handleEmailChange}
					placeholder="Enter your email"
					label="Email"
					className="mb-4"
					width="100%"
				/>
				<Input
					type="password"
					value={password}
					placeholder="Enter your password"
					onChange={handlePasswordChange}
					label="Password"
					className="mb-4"
					width="100%"
				/>
				<Button type="submit" color="primary">
					Sign In
				</Button>
			</form>
		</div>
	);
};

export default SignInPage;
