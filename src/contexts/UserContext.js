"use client";
import React, { createContext, useState, useContext, useEffect } from "react";
import { verifyUser } from "@/actions/userActions"; // Assuming this function fetches the user data from the backend

// Create the context
const UserContext = createContext();

// Create a provider component
export const UserProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true); // To handle loading state

	useEffect(() => {
		const loadUser = async () => {
			try {
				const userData = await verifyUser();
				if (userData) {
					setUser(userData);
				}
			} catch (error) {
				console.error("Failed to load user data", error);
			} finally {
				setLoading(false); // Set loading to false once done
			}
		};

		loadUser();
	}, []);

	if (loading) {
		return <div>Loading...</div>; // Or any loading spinner/placeholder
	}

	return (
			<UserContext.Provider value={{ user, setUser }}>
				{children}
			</UserContext.Provider>
	);
};

// Custom hook to consume the UserContext
export const useUser = () => {
	const context = useContext(UserContext);
	if (!context) {
		throw new Error("useUser must be used within a UserProvider");
	}
	return context;
};