import React from "react";
import { useParams } from "react-router-dom";

export default function NewUser() {
	const params = useParams();
	return <div>Welcome, {params.user}</div>;
}
