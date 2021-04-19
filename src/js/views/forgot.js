import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";

export const Forgot = () => {
	const [email, setEmail] = useState("");
	const [auth, setAuth] = useState(false);

	const handleSubmit = e => {
		e.preventDefault();

		const body = {
			email: email
		};

		// // fetch de REGISTER
		// fetch("https://3000-peach-reindeer-5dsbnefl.ws-us03.gitpod.io/register", {
		// 	method: "POST",
		// 	body: JSON.stringify(body),
		// 	headers: {
		// 		"Content-Type": "application/json"
		// 	}
		// })
		// 	.then(res => res.json())
		// 	.then(data => {
		// 		console.log(data);
		// 		// setAuth(true);
		// 	})
		// 	.catch(err => console.log(err));
	};

	return (
		<div className="container">
			<div className="jumbotron top d-flex justify-content-center" style={{ backgroundColor: "gray" }}>
				<div className="mx-auto pt-5">
					<h1>Did you forget your password?</h1>
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
							<div id="passwordHelp" className="form-text">
								We goin to send a indications for reset the password!
							</div>
						</div>
						<button type="submit" className="btn btn-outline-warning">
							Submit
						</button>
						<p />
						<Link to={"/login"} type="submit" className="btn btn-outline-primary">
							Come back
						</Link>
					</form>
					{auth ? <Redirect to="/login" /> : null}
				</div>
			</div>
		</div>
	);
};
