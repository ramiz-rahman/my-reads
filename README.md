# MyReads

This is a bookshelf app that allows you to select and categorize books that you have read, are currently reading, or want to read. The project is implemented entirely in React and makes use of the [Udacity Books API](https://reactnd-books-api.udacity.com) server.

This app is deployed with Netlify and can be accessed here: [my-reads.ramizrahman.com](https://my-reads.ramizrahman.com/). I hope you have fun playing with it.

[![Netlify Status](https://api.netlify.com/api/v1/badges/4a6d4020-64f6-4394-9afa-80e3ae7817a5/deploy-status)](https://app.netlify.com/sites/ramizrahman-myreads/deploys)

## App Functionality

It's a single page app (SPA) that makes use of React Router to navigate between two pages - home and search.

### Homepage - Bookshelves

The homepage consists of three shelves - **Currently Reading**, **Want to Read**, and **Read**. Books in a bookshelf are arranged in a grid that is implemented using CSS Grids.

![Currently Reading](https://i.imgur.com/qxpNNsi.png)

#### Switch Shelves

Click on the option icon located at the bottom right of a book to view a list of available shelves. The default value for the control is the current shelf the book is in. Click on the name in the list to move the book to the respective shelf. Clicking on _None_ will remove the book from the homepage.

![switch shelves](https://i.imgur.com/rCkCv8N.png)

#### Drag & Drop

You can also drag a book and drop it to another shelf in order to move it. This is implemented using the native HTML Drag and Drop API.

![drag and drop](dnd.gif)

### Search

Click on the **plus** floating action button to navigate to the search page. Type in the name of a topic or category (e.g. poetry, history, artificial intelligence, web development, react) and a list of books belonging to that category will be fetched from the server. The API call is debounced using _lodash debounce_ in order to improve performance. Clicking on the back arrow will navigate you back to the homepage.

![search](https://i.imgur.com/SS5CaKX.png)

#### Add book to shelf

Just like in the homepage, click on the option icon located at the bottom right of a book to view a list of available shelves. Use it to move the book into the corresponding bookshelf in the home screen. When a book is already in a bookshelf, the corresponding value will be selected in the control.

![search and move](search_and_move.gif)

## Installation and Implementation

To locally install and run this app, clone this repo and install the dependencies

```
$ git clone https://github.com/ramiz-rahman/my-reads.git
$ cd my-reads
$ npm install
```

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

#### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

#### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

#### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

#### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

#### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

#### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

## License

My Reads is released under the [MIT License](https://choosealicense.com/licenses/mit/)
