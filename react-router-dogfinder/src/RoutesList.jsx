import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import DogList from "./DogList";
import DogDetails from "./DogDetails";
import NotFound from "./NotFound";
import dogsData from "../db.json";

const RoutesList = () => {
	const { dogs } = dogsData;
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Navigate to="/dogs" />} />
				<Route path="/dogs" element={<DogList dogs={dogs} />} />
				<Route path="/dogs/:name" element={<DogDetails dogs={dogs} />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
};

export default RoutesList;
