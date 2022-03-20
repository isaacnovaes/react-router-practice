import React from "react";
import { Link } from "react-router-dom";

export default function Products() {
	return (
		<section>
			<h1>Products page</h1>
			<ul>
				<li>
					<Link to={"/products/1"}>Book</Link>
				</li>
				<li>
					<Link to={"/products/2"}>Cellphone</Link>
				</li>
				<li>
					<Link to={"/products/3"}>Shoes</Link>
				</li>
			</ul>
		</section>
	);
}
