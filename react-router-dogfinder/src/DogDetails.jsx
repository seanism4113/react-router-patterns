import { useParams, Link } from "react-router-dom";

const DogDetails = ({ dogs }) => {
	const { name } = useParams();
	const dog = dogs.find((dog) => dog.name === name);

	if (!dog) return <h2>Dog not found!</h2>;

	return (
		<>
			<div>
				<h1>{dog.name}</h1>
				<p>Age: {dog.age}</p>
				<img src={dog.src} alt={dog.name} style={{ width: "300px" }} />
				<ul>
					{dog.facts.map((fact, index) => (
						<li key={index}>{fact}</li>
					))}
				</ul>
			</div>
			<Link to="/">Return Home</Link>
		</>
	);
};

export default DogDetails;
