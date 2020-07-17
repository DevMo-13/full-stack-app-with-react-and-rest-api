import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

// Header class - displays the top menu bar for the application and includes buttons for 
// signing in and signing up (if there's not an authenticated user), 
// or the user's first and last name and a button for signing out (if there's an authenticated user).
export default class Header extends Component {
	render() {
		const { context } = this.props;
		const authUser = context.authenticatedUser;

		return (
			<div className='header'>
				<div className='bounds'>
					<h1 className='header--logo'>Courses</h1>
					<nav>
						{authUser ?
							<React.Fragment>
								<span>Welcome, {authUser.firstName} {authUser.lastName}!</span>
								<NavLink className='signout' to='/signout'>Sign Out</NavLink>
							</React.Fragment>
						:
							<React.Fragment>
								<NavLink className='signup' to='/signup'>Sign Up</NavLink>
								<NavLink className='signin' to='/signin'>Sign In</NavLink>
							</React.Fragment>
						}
					</nav>
				</div>
			</div>
		);
	};
}
