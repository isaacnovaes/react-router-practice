import { Navigate, Route, Routes } from "react-router-dom";

import Welcome from "./pages/Welcome";
import Products from "./pages/Products";
import Header from "./components/Header";
import ProductDetail from "./pages/ProductDetail";
import NewUser from "./components/NewUser.js";

function App() {
	return (
		<div>
			<Header />
			<main>
				<Routes>
					<Route path="/" element={<Navigate to="/welcome" />} />
					<Route path="/welcome/*" element={<Welcome />}>
						<Route path=":user" element={<NewUser />} />
					</Route>
					<Route path="/products" element={<Products />} />
					<Route path="/products/:productID" element={<ProductDetail />} />
				</Routes>
			</main>
		</div>
	);
}

export default App;
