// Header for the app
import { UserButton } from "@clerk/nextjs";
import {
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
} from "@nextui-org/react";

const Header = () => {
	return (
		<Navbar>
			<NavbarBrand>
				<p className="font-bold">Taskr</p>
			</NavbarBrand>
			<NavbarContent justify="end">
				<NavbarItem>
					{/* TODO: Make this toggle with the state of the user being signed in  */}
					<UserButton />
				</NavbarItem>
			</NavbarContent>
		</Navbar>
	);
};

export default Header;
