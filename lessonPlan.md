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
    * Your game should be composed of one parent component (Seymour) and three child components (Tasty Treats).
    * Clicking buttons inside of the child components should increase the total "consumed" shown in Seymour's component by different amounts.
    * Once Seymour has consumed more than 500 an alert should be triggered saying something like: "Seymour is full!"

  *

  * Show how to modularize the btns
    * Pass Name and FoodPts in
