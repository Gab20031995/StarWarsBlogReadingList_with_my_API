import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = e => {
		e.preventDefault();

		const body = {
			email: email,
			password: password
		};

		// fetch de LOGIN change the URL
		fetch("https://3000-black-donkey-1oovt2aw.ws-us03.gitpod.io/login", {
			method: "POST",
			body: JSON.stringify(body),
			headers: {
				"Content-Type": "application/json"
			}
		})
			.then(res => res.json())
			.then(data => {
				console.log(data);
				// añadir token a session
				sessionStorage.setItem("my_token", data.token);
				// let token = sessionStorage.getItem("my_token")
			})
			.catch(err => console.log(err));
	};

	return (
		<div className="container">
			<div className="jumbotron top d-flex justify-content-center" style={{ backgroundColor: "gray" }}>
				<div className="mx-auto pt-5">
					<h1>Login</h1>
					<form onSubmit={handleSubmit} style={{ width: "500px" }}>
						<div className="mb-3">
							<label htmlFor="exampleInputEmail1" className="form-label">
								Email address
							</label>
							<input
								onChange={e => setEmail(e.target.value)}
								type="email"
								className="form-control"
								id="exampleInputEmail1"
								aria-describedby="emailHelp"
								placeholder="Insert your Email"
							/>
							<p />

							<Link to={"/forgot"} type="submit" className="btn btn-outline-danger">
								Forgot password
							</Link>
						</div>
						<div className="mb-3">
							<label htmlFor="exampleInputPassword1" className="form-label">
								Password
							</label>
							<input
								onChange={e => setPassword(e.target.value)}
								type="password"
								className="form-control"
								id="exampleInputPassword1"
								placeholder="Insert your Password"
							/>
							<div id="passwordlHelp" className="form-text">
								Well never share your password with anyone else.
							</div>
						</div>

						<button type="submit" className="btn btn-outline-warning">
							Submit
						</button>
						<hr />
						<Link to={"/register"} type="submit" className="btn btn-outline-light">
							Register
						</Link>
					</form>
				</div>
			</div>
		</div>
	);
};
