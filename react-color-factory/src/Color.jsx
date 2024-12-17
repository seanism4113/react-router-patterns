import useLocalStorage from "./hooks/useLocalStorage";
import { useParams, Link } from "react-router-dom";
import "./Color.css";

const Color = () => {
	const { name } = useParams();

	const [colorsData] = useLocalStorage("colors", []);
	const colorInfo = colorsData.find((color) => color.name === name);

	return (
		<div className="Color" style={{ backgroundColor: colorInfo.value }}>
			<h1>This is {colorInfo.name}</h1>
			<h1>What a great color!</h1>
			<h2>
				<Link className="Color-link" to="/">
					GO BACK
				</Link>
			</h2>
		</div>
	);
};

export default Color;
