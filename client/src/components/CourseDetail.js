import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

// Retrieves and renders a course's details.
export default class CourseDetail extends Component {
	state ={
		course: '',
		user: ''
	};
    
	componentDidMount() {
		const { context } = this.props;
		const courseId = this.props.match.params.id;
		
		context.data.getCourse(courseId)
			.then(course => {
				this.setState({ 
					course, 
					user: course.user
				});
			})
			.catch(err => {
				console.log(err);
				this.props.history.push('/notfound');
			});
	};

    render() {
		const { 
			course, 
			user
		} = this.state;
		const { context } = this.props;
		const authUser = context.authenticatedUser;

		return (
			<React.Fragment>
				<hr></hr>
				<div>
				{authUser && authUser.id === user.id ?
					<div className='actions--bar'>
						<div className='bounds'>
							<div className='grid-100'>
								<span>
									<Link className='button' to={`${course.id}/update`}>Update Course</Link>
									<Link className='button' to={'/'}>Delete Course</Link>
									<Link className='button button-secondary' to='/'>Return to List</Link>
								</span>
							</div>
						</div>
					</div>
				:
					<div className='actions--bar'>
						<div className='bounds'>
							<div className='grid-100'>
								<span>
								<Link className='button button-secondary' to='/'>Return to List</Link>
								</span>
							</div>
						</div>
					</div>
				}
					<div className='bounds course--detail'>
						<div className='grid-66'>
							<div className='course--header'>
								<h4 className='course--label'>Course</h4>
								<h3 className='course--title'>{course.title}</h3>
								<p>By {user.firstName} {user.lastName}</p>
							</div>
							<div className='course--description'>
								<ReactMarkdown>
									{course.description}
								</ReactMarkdown>
							</div>
						</div>
						<div className='grid-25 grid-right'>
							<div className='course--stats'>
								<ul className='course--stats--list'>
									<li className='course--stats--list--item'>
										<h4>Estimated Time</h4>
										{course.estimatedTime ?
										<h3>{course.estimatedTime}</h3>
										:
										<h3>No estimated time</h3>
										}
									</li>
									<li className='course--stats--list--item'>
										<h4>Materials Needed</h4>
										{course.materialsNeeded ?
										<ReactMarkdown>
											{course.materialsNeeded}
										</ReactMarkdown>
										:
										<h3>No materials needed</h3>
										}
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
    };
}
