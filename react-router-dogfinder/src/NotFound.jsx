import { Link } from "react-router-dom";

const NotFound = () => {
	return (
		<div>
			<h1>Page not found!</h1>
			<Link to="/">Click here to return to Home</Link>
		</div>
	);
};

export default NotFound;
