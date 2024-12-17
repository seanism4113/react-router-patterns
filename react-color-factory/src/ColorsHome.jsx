import { Link } from "react-router-dom";
import "./ColorsHome.css";

const ColorsHome = ({ colors }) => {
	const colorsList = colors.map((color, index) => (
		<li key={index}>
			<a href={`/colors/${color.name}`}>{color.name}</a>
		</li>
	));
	return (
		<div className="ColorsHome">
			<header>
				<p>Welcome to the color Factory</p>
				<Link to="new">
					<h1>Add a color</h1>
				</Link>
			</header>
			<div>
				<p>Please select a color.</p>

				<ul>{colorsList}</ul>
			</div>
		</div>
	);
};

export default ColorsHome;
