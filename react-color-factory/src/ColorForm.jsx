import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./ColorForm.css";

const ColorForm = ({ addColor }) => {
	const INITIAL_STATE = {
		name: "",
		value: "#ffffff",
	};
	const [colorData, setColorData] = useState(INITIAL_STATE);
	const navigate = useNavigate();

	const handleChange = (evt) => {
		const { name, value } = evt.target;
		const newValue = name === "name" ? value.toLowerCase() : value;
		setColorData((prevData) => ({
			...prevData,
			[name]: newValue,
		}));
	};

	const handleSubmit = (evt) => {
		evt.preventDefault();
		addColor(colorData);
		setColorData(INITIAL_STATE);
		navigate("/");
	};

	return (
		<div className="ColorForm">
			<form className="ColorForm-form" onSubmit={handleSubmit}>
				<div>
					<label htmlFor="name">Color name: </label>
					<input
						className="ColorForm-colorName"
						id="name"
						type="text"
						name="name"
						value={colorData.name}
						minLength={3}
						pattern="[A-Za-z]+"
						placeholder="Enter a color (letters only)"
						required
						onChange={handleChange}
						onInvalid={(e) => {
							e.target.setCustomValidity("Only letters are allowed.");
						}}
						onInput={(e) => {
							e.target.setCustomValidity("");
						}}
					/>
				</div>
				<div>
					<label htmlFor="value">Color value: </label>
					<input id="value" type="color" name="value" value={colorData.value} placeholder="Enter a name for the color" required onChange={handleChange} />
				</div>
				<div>
					<button>Add this color</button>
				</div>
				<span>
					<Link to="/">Return to Colors home</Link>
				</span>
			</form>
		</div>
	);
};

export default ColorForm;
