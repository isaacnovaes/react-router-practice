import React from "react";
import { Link, useParams } from "react-router-dom";

export default function ProductDetail() {
	const params = useParams();

	return (
		<>
			<div>Product Detail {params.productID}</div>
			<Link to="/products">Products</Link>
		</>
	);
}
