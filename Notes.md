-----------------------------------
186 React Intro 
-----------------------------------
### Installs webpack, babel, debugging and other NPM packages
`npm install -g create-react-app`
`create-react-app robofriends`

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

---------------------------------------
191 Building A React App 2
---------------------------------------

Using map to create multiple child Card Components within the new parent CardList component.

Note error in console:

	Warning: Each child in a list should have a unique "key" prop.

	Check the render method of `CardList`. See https://fb.me/react-warning-keys for more information.
	    in Card (at CardList.js:8)
	    in CardList (at src/index.js:17)
	console.(anonymous function) @ index.js:1437
	localhost/:1 Unchecked runtime.lastError: The message port closed before a response was received.

Virtual Dom keeps track of cards, but without a 'key prop' will have to change entire DOM. We'll use this to minimize work with a 'unique key'. See 'key = {i}' within Cardlist.js.

---------------------------------------
192 Building A React App 2
---------------------------------------

One-way "pure components" (aka "dumb compononents") were used before filtering.

We'll want a memory in the app by using a "state" (description as an object) with props. Robots and whatever is searched for in input. Props and things which come out of state -- a parent is a state and the child inherits as prop.

To create State, we need to render with inheritance.

---------------------------------------
195 Building A React App 5
---------------------------------------

Have learned about "props" and "state", now we learn about "children" in the context of wrapping component for scrolling within app. We use `props.children` to render the tag within `<scroll>`.


---------------------------------------
196 Building A React App 6
---------------------------------------

Created `Containers` (to pass down to...) and `Components` (to take messages from Containers as 'pure functions')

For building a deployment version use:
`npm run build`

This creats "/Static" folder and doesn't push to github.

Will try making a `gh-pages` version next with this article's code:

https://medium.com/the-andela-way/how-to-deploy-your-react-application-to-github-pages-in-less-than-5-minutes-8c5f665a2d2a

For `gh-pages` deployment security from above link:

```
Note:
Whilst hosting a more robust app, routing using on gh-pages does not work well with BrowserRouter or ReactRouter, make use of HashRouter from react-router-dom instead. So you’d import { HashRouter } from 'react-router-dom' as opposed to using import { BrowserRouter } from 'react-router-dom’, this will, however, create a # sign on your route.
Sensitive information (eg .env files) should not be pushed to your online repository. My workaround is usually to git ignore the .env or configfile before pushing to my remote repository, when this is done I then allow git to track the .env or config file before running yarn run deploy, this makes my deployed app to have access to the necessary configuration files I need without compromising the security of the app.
Thanks for reading and I do hope you found this article somewhat helpful.
```

----------------------------------------
Launching Gh-pages static app 
----------------------------------------

For setup:
https://dev.to/brettcnelson/getting-create-react-app-to-work-with-custom-domains-on-github-user-project-pages-2hp2

For security:
https://medium.com/the-andela-way/how-to-deploy-your-react-application-to-github-pages-in-less-than-5-minutes-8c5f665a2d2a