import React from "react";
import { Outlet } from "react-router-dom";


export default function Welcome() {
	return (
		<>
			<h1>Welcome page</h1>
			<Outlet />
		</>
	);
}
