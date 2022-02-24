// Step 1: Import React
import * as React from "react";
import { Link } from "gatsby";
import intermedLogo from "../images/intermedLogo.jpg";

// Step 2: Define your component
const IndexPage = () => {
	return (
		<main>
			<title>Home Page</title>
			<h1>Welcome to my Gatsby site!</h1>
			<img src={intermedLogo} alt="intermed-logo" />
			<Link to="/about">About</Link>
			<p>I'm making this by following the Gatsby Tutorial.</p>
		</main>
	);
};
// Step 3: Export your component
export default IndexPage;
