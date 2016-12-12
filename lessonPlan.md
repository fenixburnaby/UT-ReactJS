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
