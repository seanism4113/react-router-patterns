import { Link } from "react-router-dom";
import "./DogList.css";

const DogList = ({ dogs }) => {
	const showDogs = dogs.map((dog) => (
		<div className="DogList-container" key={dog.name}>
			<p>
				<Link to={dog.name}>{dog.name}</Link>
			</p>
			<Link to={dog.name}>
				<img src={dog.src} alt={dog.name} style={{ width: "150px" }} />
			</Link>
		</div>
	));

	return (
		<>
			<h1>All Our Dogs!</h1>
			<div className="DogList">{showDogs}</div>
		</>
	);
};

export default DogList;
