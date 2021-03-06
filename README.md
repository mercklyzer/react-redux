## REDUX
Global State Management <br />

## Packages
npm i redux react-redux <br />
Redux contains redux functions (createStore, combineReducers) <br />
React-redux contains components/functions that connects the store to other redux components (Provider, useSelector, useDispatch) <br />

## Steps
1.) Create 2 folders: actions and reducers. In actions, create a file for a specific set of actions. In reducers, create files that each represent a collection of state (i.e. 1 reducer for movie list, another reducer of user logging). Finally, add index.js in reducers folder and combine the reducers using combineReducers. <br />
2.) In index.js (main), create a store using createStore. Also import Provider and wrap <App /> with Provider <br />
3.) In components that need data from store, use useSelector() <br />
4.) To update the store, use useDispatch. Make sure to import the actions defined in actions folder <br />

## REMINDER
1.) Make sure that action types are unique for ALL REDUCERS <br />

## Dev Tools
1.) Install Redux DevTools chrome extension <br />
2.) In createStore, add this as argument (after the reducers): `window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()` <br />