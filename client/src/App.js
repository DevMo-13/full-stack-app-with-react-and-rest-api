/******************************************
Treehouse Techdegree:
FSJS project 10 - Full Stack App with React and a REST API
--aiming for exceeds expectations--
******************************************/

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import UserSignUp from './components/UserSignUp';
import UserSignIn from './components/UserSignIn';
import UserSignOut from './components/UserSignOut';
import Courses from './components/Courses';
import CourseDetail from './components/CourseDetail';
import CreateCourse from './components/CreateCourse';
import UpdateCourse from './components/UpdateCourse';

import withContext from './Context';

// Connect the components to context.
const HeaderWithContext = withContext(Header);
const UserSignUpWithContext = withContext(UserSignUp);
const UserSignInWithContext = withContext(UserSignIn);
const UserSignOutWithContext = withContext(UserSignOut);
const CoursesWithContext = withContext(Courses);
const CourseDetailWithContext = withContext(CourseDetail);
const CreateCourseWithContext = withContext(CreateCourse);
const UpdateCourseWithContext = withContext(UpdateCourse);

export default () => (
	<Router>
		<div>
			<HeaderWithContext />
			<Switch>
				<Route exact path='/' component={CoursesWithContext}/>
				<Route exact path='/courses/:id' component={CourseDetailWithContext}/>
				<Route exact path='/courses/:id/update' component={UpdateCourseWithContext}/>
				<Route exact path='/create' component={CreateCourseWithContext}/>
				{/* <PrivateRoute path='/authenticated' component={AuthWithContext} /> */}
				<Route path='/signin' component={UserSignInWithContext} />
				<Route path='/signup' component={UserSignUpWithContext} />
				<Route path='/signout' component={UserSignOutWithContext} />
				{/* <Route component={NotFound} /> */}
			</Switch>
		</div>
	</Router>
);
