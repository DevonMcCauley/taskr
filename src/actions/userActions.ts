// Actions for users
// TODO: This will eventually be server actions

const apiURL = process.env.NEXT_PUBLIC_API_URL;

export const verifyUser = async () => {
	try {
		// Call the verify endpoint to verify the user
		const response = await fetch(`${apiURL}/auth/verify`, {
			method: "GET",
			credentials: "include",
		});
		if (response.ok) {
			return await response.json();
		} else {
			return null;
		}
	} catch (error) {
		console.error("Error fetching user data:", error);
		return null;
	}
};

export const login = async (email: string, password: string) => {
	// Make a call to the backend to login
	const response = await fetch(`${apiURL}/auth/login`, {
		method: "POST",
		credentials: "include",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			email,
			password,
		}),
	});
	const data = await response.json();

	return data;
};

export const logout = async () => {
	// Make a call to the backend to logout
	const response = await fetch(`${apiURL}/auth/logout`, {
		method: "POST",
		credentials: "include",
	});
	const data = await response.json();

	return data;
};

export const signup = async (user: any) => {
	// Make a call to the backend to signup
	const response = await fetch(`${apiURL}/users`, {
		method: "POST",
		credentials: "include",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(user),
	});
	const data = await response.json();

	return data;
};
