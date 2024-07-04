import { useState } from "react";
import axios from "axios";
import EndSection from "./EndSection";
import Header from "./Header";
import "../App.css";
import { Alert } from "bootstrap";
import { useNavigate } from "react-router-dom";

export default function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const navigate = useNavigate();
	const handleSubmit = (event) => {
		event.preventDefault();

		axios
			.post("http://localhost:3001/auth/login", {
				email,
				password,
			})
			.then((response) => {
				Alert("Login successful:", response.data);
				navigate("/admin/products");
			})
			.catch((error) => {
				console.error("There was an error logging in!", error);
				setError("Invalid email or password.");
			});
	};

	return (
		<>
			<div className="hero_area">
				<Header />
			</div>
			{/* login section */}
			<div
				className="containerLogin d-flex justify-content-center align-items-center"
				style={{ minHeight: "100vh" }}
			>
				<div className="card bg-light" style={{ width: "400px" }}>
					<div className="card-body">
						<h2 className="card-title text-center">Login</h2>
						<form onSubmit={handleSubmit}>
							<div className="form-group">
								<label htmlFor="email">Email</label>
								<input
									type="email"
									id="email"
									className="form-control"
									name="email"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									required
								/>
							</div>
							<div className="form-group">
								<label htmlFor="password">Password</label>
								<input
									type="password"
									id="password"
									className="form-control"
									name="password"
									value={password}
									onChange={(e) => setPassword(e.target.value)}
									required
								/>
							</div>
							{error && <div className="alert alert-danger mt-3">{error}</div>}
							<button type="submit" className="btn btn-primary btn-block mt-4">
								Submit
							</button>
						</form>
					</div>
				</div>
			</div>
			{/* end login section */}
			<EndSection />
		</>
	);
}
