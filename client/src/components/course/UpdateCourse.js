import React, { Component } from 'react';
import ErrorsDisplay from '../ErrorsDisplay';

// Retrieves course's details and updates any changes made by user.
export default class UpdateCourse extends Component {
	state ={
		title: '',
		description: '',
		estimatedTime: '',
		materialsNeeded: '',
		errors: []
	};
	
	// Gets the specific course's details to save in state,
	// but only if current authUser is the owner of the course.
	componentDidMount() {
		const { context } = this.props;
		const courseId = this.props.match.params.id;

		context.data.getCourse(courseId)
			.then(course => {
				this.setState({ 
					title: course.title,
					description: course.description,
					estimatedTime: course.estimatedTime,
					materialsNeeded: course.materialsNeeded,
				});
			})
			.catch(err => {
				console.log(err);
				this.props.history.push('/notfound');
			});
	};

	// Updates course's data on submit,
	// or displays validations errors.
	submit = (event) => {
		event.preventDefault();

		const { context } = this.props;
		const authUser = context.authenticatedUser;
		const emailAddress = authUser.emailAddress;
		const password = context.unhashedPassword;
		const courseId = this.props.match.params.id;
		const { 
			title,
			description,
			estimatedTime,
			materialsNeeded
		} = this.state;
		const course = {
			title,
			description,
			estimatedTime,
			materialsNeeded
		};

		context.data.updateCourse(courseId, course, emailAddress, password)
			.then(error => {
				if (error.length) {
					console.log(error);
					this.setState({ errors: error });
				} else {
					console.log(`${title} has been successfully updated!`);
					this.props.history.push(`/courses/${courseId}`);  
				};
			})
			.catch(err => {
				console.log(err);
				this.props.history.push('/error')
			});
	};

	// Saves input data to state.
	change = (event) => {
		const name = event.target.name;
		const value = event.target.value;

		this.setState(() => {
			return {
				[name]: value
			};
		});
	};

	// Redirects user to the CourseDetail route.
	cancel = (event) => {
		event.preventDefault();
		const courseId = this.props.match.params.id;
		this.props.history.push(`/courses/${courseId}`);
	};

    render() {
		const { 
			title,
			description,
			estimatedTime,
			materialsNeeded,
			errors
		} = this.state;
		const { context } = this.props;
		const authUser = context.authenticatedUser;

		return (
			<React.Fragment>
				<hr></hr>
					<div className='bounds course--detail'>
						<h1>Update Course</h1>
						<ErrorsDisplay errors={errors} />
						<div>
							<form onSubmit={this.submit}>
								<div className='grid-66'>
									<div className='course--header'>
										<h4 className='course--label'>Course</h4>
										<div>
											<input 
												id='title' 
												name='title' 
												type='text' 
												className='input-title course--title--input' 
												placeholder='Course title...'
                    							value={title}
												onChange={this.change} />
										</div>
										<p>By {authUser.firstName} {authUser.lastName}</p>
									</div>
									<div className='course--description'>
										<div>
											<textarea 
												id='description' 
												name='description' 
												className='' 
												placeholder='Course description...'
												value={description}
												onChange={this.change} />
										</div>
									</div>
								</div>
								<div className='grid-25 grid-right'>
									<div className='course--stats'>
										<ul className='course--stats--list'>
											<li className='course--stats--list--item'>
												<h4>Estimated Time</h4>
												<div>
													<input 
														id='estimatedTime' 
														name='estimatedTime' 
														type='text' 
														className='course--time--input'
                        								placeholder='Hours' 
														value={estimatedTime}
														onChange={this.change} />
												</div>
											</li>
											<li className='course--stats--list--item'>
												<h4>Materials Needed</h4>
												<div>
													<textarea 
														id='materialsNeeded' 
														name='materialsNeeded' 
														className='' 
														placeholder='List materials...'
														value={materialsNeeded}
														onChange={this.change}  />
												</div>
											</li>
										</ul>
									</div>
								</div>
								<div className='grid-100 pad-bottom'>
									<button className='button' type='submit'>Update Course</button>
									<button className='button button-secondary' onClick={this.cancel}>Cancel</button>
								</div>
							</form>
						</div>
					</div>
			</React.Fragment>
		);
    };
}
