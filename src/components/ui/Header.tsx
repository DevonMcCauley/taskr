// Header for the app
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
				<NavbarItem></NavbarItem>
			</NavbarContent>
		</Navbar>
	);
};

export default Header;
