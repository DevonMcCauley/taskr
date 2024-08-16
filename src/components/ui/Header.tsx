// Header for the app
"use client";
import {
	Button,
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
} from "@nextui-org/react";
import { useUser } from "@/contexts/UserContext";
import { logout } from "@/actions/userActions";
import { useRouter } from "next/navigation";
const Header = () => {
	const { user, setUser } = useUser();
	const router = useRouter();

	const handleLogout = async () => {
		await logout();
		setUser(null);

		// Redirect to the login page
		router.push("/login");
	};

	return (
		<Navbar>
			<NavbarBrand>
				<p className="font-bold text-2xl">Taskr</p>
			</NavbarBrand>
			<NavbarContent justify="end">
				<NavbarItem></NavbarItem>
			</NavbarContent>
			{user ? (
				<Button color="warning" onClick={handleLogout}>
					Logout
				</Button>
			) : (
				""
			)}
		</Navbar>
	);
};

export default Header;
