"use client";
import React, { useState, useEffect } from "react";
import { useUser } from "@/contexts/UserContext";
import { useRouter } from "next/navigation";
import { login } from "@/actions/userActions";
import { Button, Input } from "@nextui-org/react";

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
			<h2 className="text-center text-3xl">Sign In</h2>
			<form onSubmit={handleSubmit} className="max-w-sm mx-auto">
				<div className="mt-4">
					<Input
						type="email"
						value={email}
						onChange={handleEmailChange}
						placeholder="Enter your email"
						label="Email"
					/>
				</div>
				<div className="my-4">
					<Input
						type="password"
						value={password}
						placeholder="Enter your password"
						onChange={handlePasswordChange}
						label="Password"
					/>
				</div>
				<div className="flex justify-center">
					<Button
						className="w-8/12"
						type="submit"
						color="primary"
						variant="bordered"
					>
						Sign In
					</Button>
				</div>
			</form>
		</div>
	);
};

export default SignInPage;
