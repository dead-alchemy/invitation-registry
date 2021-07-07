import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";

// Import our core modules
import AppHead from "components/apphead/apphead";
import App from "App";
import Invitation from "components/inviation/invitation";

//Normalize helps across browsers
import "styles/normalize.css";
import "styles/apphead.scss";

const Routes = (props) => {
	return (
		<Router>
			<AppHead />
			<Route exact path="/" component={App} />
			<Route exact path="/invitations" component={Invitation} />
		</Router>
	);
};

export default Routes;
