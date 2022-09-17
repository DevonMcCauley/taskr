import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";

function Copyright() {
	return (
		<Typography variant="body2" color="text.secondary">
			{"Copyright © "}
			<Link color="inherit" href="https://devondevelops.tech/">
				Devon McCauley
			</Link>{" "}
			{new Date().getFullYear()}
			{"."}
		</Typography>
	);
}

// The completed Footer componeent
export default function Footer() {
	return (
		<Box
			component="footer"
			sx={{
				py: 1,
				px: 1,
				mt: "auto",
				position: "fixed",
				left: 0,
				bottom: 0,
				right: 0,
				display: "flex",
				backgroundColor: (theme) =>
					theme.palette.mode === "light"
						? theme.palette.grey[200]
						: theme.palette.grey[800],
			}}
		>
			<Container maxWidth="sm">
				<Typography variant="body1">Taskr</Typography>
				<Copyright />
			</Container>
		</Box>
	);
}
