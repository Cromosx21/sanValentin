import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./App";
import Pregunta from "./Pregunta";
import Success from "./Success";

export default function AppRouter() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
                <Route path="/pregunta" element={<Pregunta />} />
                <Route path="/success" element={<Success />} />
			</Routes>
		</Router>
	);
}
