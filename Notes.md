-----------------------------------
186 React Intro 
-----------------------------------
### Installs webpack, babel, debugging and other NPM packages
npm install -g create-react-app 
create-react-app robofriends

### To Start NPM Server
npm start

### NPM Commands
https://docs.npmjs.com/cli-documentation/cli

### Note: In Sublime Text, change view with Babel JS for React Syntax

### Updates on React App
In `package.json`, simply update `"react-scripts"` to a newer version, and rerun `npm start` from Command Line. Note: updating can break features -- so QA is needed post change.

Imports work on the app now, because bundling has been integrated with `create-react-app`

React (view library manipulates DOM)

ReactDOM is used for DOM websites

Can use ReactNative as import for mobile

Can use `import ./index.css` in `index.js` to render individual components from virtual DOM.

Use `registerServiceWorker();` in index.js to work with apps offline -- automatically installed on `npm start`.

### Tachyons allow us to style components
Exit console
Enter `npm install tachyons`
Gets added to package.json
*Can install without Typescript -- ignore errors

-------------------------------------
190 Building React App
------------------------------------

Destructuring and adding robots randomply through 'Card.js' and 'robots.js'
