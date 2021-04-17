import React, { useState } from "react";
import { Redirect } from "react-router-dom";

export const Register = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [auth, setAuth] = useState(false);

	const handleSubmit = e => {
		e.preventDefault();

		const body = {
			email: email,
			password: password
		};

		// fetch de REGISTER
		fetch("https://3000-peach-reindeer-5dsbnefl.ws-us03.gitpod.io/register", {
			method: "POST",
			body: JSON.stringify(body),
			headers: {
				"Content-Type": "application/json"
			}
		})
			.then(res => res.json())
			.then(data => {
				console.log(data);
				// setAuth(true);
			})
			.catch(err => console.log(err));
	};

	return (
		<div className="container">
			<div className="jumbotron top d-flex justify-content-center" style={{ backgroundColor: "gray" }}>
				<div className="mx-auto pt-5">
					<h1>Register</h1>
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
							<div id="passwordHelp" className="form-text">
								Well never share your password with anyone else.
							</div>
						</div>
						<div className="mb-3">
							<label htmlFor="exampleInputPassword1" className="form-label">
								Confirm you password
							</label>
							<input
								onChange={e => setPassword(e.target.value)}
								type="password"
								className="form-control"
								id="exampleInputPassword1"
								placeholder="Insert your Password"
							/>
						</div>
						<button type="submit" className="btn btn-outline-warning">
							Submit
						</button>
					</form>
					{auth ? <Redirect to="/login" /> : null}
				</div>
			</div>
		</div>
	);
};
