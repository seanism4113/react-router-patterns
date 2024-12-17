import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import useLocalStorage from "./hooks/useLocalStorage";
import ColorsHome from "./ColorsHome";
import ColorForm from "./ColorForm";
import Color from "./Color";

const RouteList = () => {
	const [colors, setColors] = useLocalStorage("colors", []);

	const addColor = (formData) => {
		setColors((prevColors) => [...prevColors, formData]);
	};
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Navigate to="/colors" />} />
					<Route path="/colors" element={<ColorsHome colors={colors} />} />
					<Route path="/colors/:name" element={<Color />} />
					<Route path="colors/new" element={<ColorForm addColor={addColor} />} />
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default RouteList;
