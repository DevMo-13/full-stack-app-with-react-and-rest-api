# FULL STACK APP WITH REACT AND A REST API
 Treehouse FSJS Techdegree Project 10 - Full Stack App with React and a REST API

In this project, I used my knowledge of React, JSX, React Router, React Context API, and Create React App to to create a client for the school database REST API I created in another project. The full stack application provides a way for users to administer a school database containing information about courses: users can interact with the database by retrieving a list of courses, viewing detail for a specific course, as well as creating, updating and deleting courses in the database.
In addition, the project requires users to create an account and sign in to make changes to the database.

---

Key achievements:
- Used JavaScript and JSX to build out the components for the application in a modular fashion
- Used React Router to set up routes
- Configured protected routes that only allow authenticated users to access those pages
- Managed global state by using the React Context API
- Used the Fetch API to fetch data from my REST API
- Utilized CORS to support cross-origin resource sharing between the REST API and the React app
- Allowed users to sign up and used basic authentication to support users signing in
- Programmed user-friendly messages to display when things go wrong
- Set user credentials to persist using an HTTP cookie so that the user's authenticated state is maintained even if the application is reloaded or loaded into a new browser tab
- Added functionality that redirects a user back to their previous screen after they successfully sign in

--- 

To get up and running with this project, download the project files, and run the following commands.

### START THE REST API
First, navigate to the api folder, then install the API project's dependencies using `npm`.

```
npm install
```

Second, seed the SQLite database.

``` 
npm run seed
```

And lastly, start the application.

```
npm start
```

To test the Express server, browse to the URL [http://localhost:5000/](http://localhost:5000/).
Once the REST API application is started, leave the app running in the background.

### START THE REACT APPLICATION
Now, navigate to the client folder, and then install the React project's dependencies using `npm`.

```
npm install
```


Lastly, start the React application.

```
npm start
```

The application should then open into your default browser. 
If the development server started but it didn't open in the browser, try manually browsing to the URL [http://localhost:3000/](http://localhost:3000/).