import classes from "./HeaderItem.module.css";

const HeaderItem = (props) => {
	return (
		<div className={classes.nav__tab}>
			<div>{props.title}</div>
		</div>
	);
};
export default HeaderItem;
