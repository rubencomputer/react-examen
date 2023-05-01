import React from "react";
import { Routes, Route } from "react-router-dom";

import Menu from "./Menu";
import Curp from "./Curp";

export const App = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<Menu />} />
				<Route path="/curp" element={<Curp />} />
			</Routes>
		</>
	);
};

export default App;
