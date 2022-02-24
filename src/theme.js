import { createTheme } from "@mui/material/styles";

const theme = createTheme({
	palette: {
		type: "light",
		primary: {
			main: "#1f73ba",
			light: "#60a1ed",
			dark: "#00488a",
		},
		secondary: {
			main: "#022a44",
			light: "#35526f",
			dark: "#00001e",
		},
		error: {
			main: "#d32f2f",
		},
		warning: {
			main: "#f57c00",
		},
		success: {
			main: "#4caf50",
		},
		divider: "rgba(0,0,0,0.12)",
		text: {
			primary: "rgba(0,0,0,0.87)",
		},
		background: {
			default: "#fffff",
		},
	},

	typography: {
		fontFamily: '"Roboto", "Arial", sans-serif',
		fontSize: 17,
		fontWeightBold: 700,
		h1: {
			fontSize: 25,
			fontWeight: 300,
		},
		subtitle1: {
			fontFamily: "Roboto",
		},
		body1: {
			fontFamily: "Roboto",
		},
		button: {
			fontWeight: 500,
			fontSize: 14,
		},
	},
});
