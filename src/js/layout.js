import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { PeopleDetail } from "./views/peopleDetail";
import { PlanetsDetail } from "./views/planetsDetail";
import { VehiclesDetail } from "./views/vehiclesDetail";
import { Login } from "./views/login";
import { Register } from "./views/register";
import { Forgot } from "./views/forgot";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/forgot">
							<Forgot />
						</Route>
						<Route exact path="/register">
							<Register />
						</Route>
						<Route exact path="/login">
							<Login />
						</Route>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/peopleDetail/:id">
							<PeopleDetail />
						</Route>
						<Route exact path="/planetsDetail/:id">
							<PlanetsDetail />
						</Route>
						<Route exact path="/vehiclesDetail/:id">
							<VehiclesDetail />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
