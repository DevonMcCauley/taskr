// Sign Up page

"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Button, Input, Spacer } from "@nextui-org/react";
import toast from "react-hot-toast";
import { signup } from "@/actions/userActions";

const SignUpPage: React.FC = () => {
	const router = useRouter();
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [confirmEmail, setConfirmEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		// Validate the email and password
		if (!firstName) {
			toast.error("Please enter your first name");
			return;
		}
		if (!lastName) {
			toast.error("Please enter your last name");
			return;
		}
		if (!email) {
			toast.error("Please enter your email");
			return;
		}
		if (!confirmEmail) {
			toast.error("Please confirm your email");
			return;
		}
		if (email !== confirmEmail) {
			toast.error("Emails do not match");
			return;
		}
		if (!password) {
			toast.error("Please enter your password");
			return;
		}
		if (!confirmPassword) {
			toast.error("Please confirm your password");
			return;
		}
		if (password !== confirmPassword) {
			toast.error("Passwords do not match");
			return;
		}

		const data = await signup({
			firstName,
			lastName,
			email,
			password,
		});

		console.log(data);
	};

	const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFirstName(e.target.value);
	};

	const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setLastName(e.target.value);
	};

	const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(e.target.value);
	};

	const handleConfirmEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setConfirmEmail(e.target.value);
	};

	const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setPassword(e.target.value);
	};

	const handleConfirmPasswordChange = (
		e: React.ChangeEvent<HTMLInputElement>
	) => {
		setConfirmPassword(e.target.value);
	};

	const handleLoginClick = () => {
		router.push("/login");
	};

	return (
		<div className="flex flex-col items-center justify-center h-screen">
			<h2 className="text-3xl font-bold mb-4">Sign up for Taskr</h2>
			<form onSubmit={handleSubmit} className="max-w-sm w-full px-4">
				<div className="flex flex-col gap-3">
					<Input
						type="text"
						placeholder="Enter your first name"
						label="First Name"
						width="100%"
						value={firstName}
						onChange={handleFirstNameChange}
					/>
					<Input
						type="text"
						placeholder="Enter your last name"
						label="Last Name"
						width="100%"
						value={lastName}
						onChange={handleLastNameChange}
					/>
					<Input
						type="email"
						placeholder="Enter your email"
						label="Email"
						width="100%"
						value={email}
						onChange={handleEmailChange}
					/>
					<Input
						type="email"
						placeholder="Confirm your email"
						label="Confirm Email"
						width="100%"
						value={confirmEmail}
						onChange={handleConfirmEmailChange}
					/>
					<Input
						type="password"
						placeholder="Enter your password"
						label="Password"
						width="100%"
						value={password}
						onChange={handlePasswordChange}
					/>
					<Input
						type="password"
						placeholder="Enter your password"
						label="Confirm Password"
						width="100%"
						value={confirmPassword}
						onChange={handleConfirmPasswordChange}
					/>
					<div className="flex flex-col gap-3">
						<Button type="submit" color="primary">
							Register
						</Button>
						<Button onClick={handleLoginClick} color="secondary">
							Login
						</Button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default SignUpPage;
