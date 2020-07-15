/******************************************
Treehouse Techdegree:
FSJS project 10 - Full Stack App with React and a REST API
--aiming for exceeds expectations--
******************************************/

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export default () => (
	<Router>
		<div>
			{/* <HeaderWithContext /> */}
			<h1>Hello</h1>
			<Switch>
				{/* <Route exact path="/" component={Public} /> */}
				{/* <PrivateRoute path="/authenticated" component={AuthWithContext} />
				<Route path="/signin" component={UserSignInWithContext} />
				<Route path="/signup" component={UserSignUpWithContext} />
				<Route path="/signout" component={UserSignOutWithContext} />
				<Route component={NotFound} /> */}
			</Switch>
		</div>
	</Router>
);
