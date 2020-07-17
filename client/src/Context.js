import React, { Component } from 'react';
import Cookies from 'js-cookie';
import Data from './Data';

const Context = React.createContext(); 

// Higher-order component (HOC) that shares functionality across the components of the app. 
// This allows reuse of component logic and state.
export class Provider extends Component {
	state = {
		authenticatedUser: Cookies.getJSON('authenticatedUser') || null,
		unhashedPassword: Cookies.getJSON('unhashedPassword')|| null
	};

	constructor() {
		super();
		this.data = new Data();
	};

	render() {
		const { authenticatedUser, unhashedPassword } = this.state;

		const value = {
			authenticatedUser,
			unhashedPassword,
			data: this.data,
			actions: {
				signIn: this.signIn,
				signOut: this.signOut
			}
		};

		return (
			<Context.Provider value={value}>
				{this.props.children}
			</Context.Provider>  
		);
	};

  
	signIn = async (emailAddress, password) => {
		const user = await this.data.getUser(emailAddress, password);
		
		if (user !== null) {
			this.setState(() => {
				return {
					authenticatedUser: user,
					unhashedPassword: password
				};
			});
			
			Cookies.set('authenticatedUser', JSON.stringify(user), { expires: 1 });
			Cookies.set('unhashedPassword', JSON.stringify(password), { expires: 1 });
		};
		
		return user;
	};

	signOut = () => {
		this.setState(() => {
			return {
				  authenticatedUser: null,
				  unhashedPassword: null
			};
		});

		Cookies.remove('authenticatedUser');
		Cookies.remove('unhashedPassword');
	};
}

export const Consumer = Context.Consumer;

/**
 * A higher-order component that wraps the provided component in a Context Consumer component.
 * @param {class} Component - A React component.
 * @returns {function} A higher-order component.
 */

export default function withContext(Component) {
	return function ContextComponent(props) {
		return (
			<Context.Consumer>
				{context => <Component {...props} context={context} />}
			</Context.Consumer>
		);
	};
}
