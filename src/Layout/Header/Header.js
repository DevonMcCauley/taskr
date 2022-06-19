import classes from "./Header.module.css";
import HeaderItem from "./HeaderItem";

const Header = () => {
	return (
		<nav className={classes.nav__wrapper}>
			<div className={classes.nav__title}>Taskr</div>
			<HeaderItem title="Home" />
			<HeaderItem title="About" />
		</nav>
	);
};

export default Header;
