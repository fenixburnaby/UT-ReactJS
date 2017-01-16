# Start from 00-Check-Up and live code through each folder.
###### Note: These are just personal lesson plan notes for myself.

## 00-Check-Up
  * How is everyone doing?
  * "We will be reviewing what we went over last class and use that as a jumping off point for todays lesson."
  * "We will be running through a quick slide deck and then get right into coding."
  * "Questions before we get started?"
  * Start slides
  * Use the 00-React folder as a starting point boiler plate code

## 01-Review

* Review Package.json
  * devDependencies vs dependencies
* Review Webpack.config.js
  * watch flag
* Review index.html
* Review app.js

## 02-Components

* Let's Create a article panel!
  * Create base article panel layout in app.js
  * Create one article in app.js
  * Build Components folder
  * Export article panel
  * Export individual article
  * Start passing props down

## 03-State

  * Read through state vs props
    * https://github.com/uberVU/react-guide/blob/master/props-vs-state.md
  * Show example of getInitialState
  * Create panel with 2 btns
  * Attach a OnClick to the btns
  * Demo this.setState
    * This will force trigger a reRender
  * Download React Dev Tools for Chrome
    * https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en
    * Go to chrome settings:
      * Extensions
      * React Dev Tools
      * Click the 'Allow access to file URL's'
  * Demo dev tools
  * Create lifecycle method componentDidUpdate
    * Demo that is will be called after a render
    * Refer to https://facebook.github.io/react/docs/react-component.html

## 04-Child-to-Parent

  * Export out btns and explain that these btns no longer have access to the counters state
  * Change to a single setCounter fn
  * Pass the count down as a prop
  * Pass the single function down as a prop
  * Have the ActionBtns fire the passed down function
  * Show in the dev tools that the onClick handler says bound

## 05-Feed-Me-Seymour

  * Demo Activity
  * Activity Instructions:
    * Create a similar "Feed Me Seymour" game to the one shown just now.
    * Your game should be composed of one parent component (Seymour) and three rendered child components (Tasty Treats).
    * Clicking buttons inside of the child components should increase the total "consumed" shown in Seymour's component by different amounts.
    * Once Seymour has consumed more than 500 an alert should be triggered saying something like: "Seymour is full!"

  * Live Code Answer:
    * Change over component file name, initial state var, and change panel
    * Display state in panel
    * Create foodBtn component
    * Pass eatFood fn to change Seymour's hunger state
    * Pass in foodPts value and foodName
    * Connect those props to the footBtn
    * Connect a onClick handler to change hunger state

## 06-Forms

  * Change File names and vars over to a Form
  * Bootstrap in a simple Form
  * Set Initial State that matches the form, pass in as values in the form
  * Add an onChange fn to fire when the form input is changed
  * Add id to the inputs to be able to reference them
  * Explain that an event is passed as the first parameter into the change fn
  * Reference that event to update the state
  * Add a submit btn and form on submit fn
  * Use event.preventDefault to stop the form from submitting and refreshing the page
  * Log the state to show that you can now use the data however you like
  * Reset the state

## 07-Axios

  * Create a Movie file
  * Export form.js
  * Remove num field
  * Change handleSubmit to take a prop of submit
  * Create a utils/helpers.js file
  * Require axios (similar to request for node but also made for the client)
  * npm install axios
  * Export a obj with a getMovieByName function
  * From the Movie file pass the handleSubmit to the Form component as submit
  * Return the result of an axios get in Movie file
    * Quick api to ping https://www.omdbapi.com/
    * Axios npm docs https://www.npmjs.com/package/axios
  * In the submit handler log out the result of the getMovieByName
  * Assign the results to the state
  * Display the state results on the page. This can be replaced with a results component later

## 08-FrontEndApp

  * Instructions:
    * We will be creating a simple app using Axios for API calls
    * Pair up in groups of 3-4
    * Your goal will be to create a front-end App to display the data you get back from a API
    * You must break out your page into components!
    * You app must take at least 1 input from an input form
    * Use Github's API https://developer.github.com/v3/repos/ or feel free to use another you may have in mind

## 09-ES6-Boiler-Plate
  * Slack out the following:
  * Welcome Everyone!
    * We will first be going through 09-ES6-Boiler-Plate to give you a base starting place for your future react applications.
    * Please read through the difference between hash history and browserHistory. We will utilizing browserHistory for this example as it is recommended for production applications.
    * https://github.com/ReactTraining/react-router/blob/master/docs/guides/Histories.md#histories
    * We will be using material-ui as a UI Library like bootstrap because why not, and you will see how much easier it is to incorporate a component library that is React ready
    * http://www.material-ui.com/#/
    * Note: I will also be using react-grid-system because it is a simple grid system that will look very familiar to us
    * https://zoover.github.io/react-grid-system/
    * Also we have added another preset to webpack called stage-0. This will allow us to use the early proposed features for ECMAScript. Also material-ui needs stage-1 so we will be covered by using stage-0.
  * Repetition 1: Walk through application with monitors closed
  * Repetition 2:
    * 'Everyone Please Open your computers and walk a partner through the code we just discussed'
  * Repetition 3
  * Instructions:
    * Create an additional page and incorporate some material-ui
    * BONUS Create a navbar (appbar) that will display across all pages and act as navigation between pages. *Note:* Remember to create a component folder!

## 10-ImmutableState
  * Find Answers to the following:
    * What does Immutable data mean?
    * Pros and Cons of Immutable data?
  * Walk through / code through 10-ImmutableState file

## 11-Redux-Intro
  * Explain the following:
    * In Redux we will extract the state of our application and its components into a store.
    * Our store will be an object containing any data or state information about our application
    * As we need to update this we will dispatch an action
    * Actions have a type and a payload
    * This Action gets send to a reducer to change our state
    * We will write smart code to figure out what we want to update and then update it using our new skills with immutable data
    * Once we update the store our application will receive the new data and update as per React
  * https://camo.githubusercontent.com/af8803571294fe373a54d039be8f9709f15a2ad4/687474703a2f2f6d616b6569746f70656e2e636f6d2f7374617469632f696d616765732f72656475785f666c6f7763686172742e706e67
  * Live code the example in 11 explaining that this is only for demonstration of the flow within Redux, it will not be the final way of coding it

## 12-React-Redux
  * Repetition 1: Walk through application with monitors closed
    * Redux has a bit of setup to get our app prepared
    * app.js - We will be wrapping our application in a Provider component that has the store attached to it. This will allow any component to connect to our redux store and also dispatch actions
    * store.js - As per our last example we need to create a store and pass it our reducer. In this example we are also passing in middleware to improve some functionality later on, as well as including a logger to help us with development
    * reducers/index.js - We are going to separate out different parts of our applications state and combine them here. Each separate reducer will contain the state they affect and the immutable logic behind them
    * Welcome.js - To get store data into our components we will use a class decorator for connect. This will wrap our component and pass in the values we declare as props. We will need to add class decorators to our webpack config as well. To update our store we will dispatch actions like before.
    * actions/countActions.js - We import these action functions to be reused across our entire application.
  * Repetition 2:
    * 'Everyone Please Open your computers and walk a partner through the code we just discussed'
  * Repetition 3
  * Instructions:
    * Create an input field whos value is stored in our store as you type
    * When you click the increment or decrement button it use the value of the input field to increment or decrement the count
    * BONUS: Create a input field and button to update the user
