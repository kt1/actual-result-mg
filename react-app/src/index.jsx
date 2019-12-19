import React from 'react';
import { render }  from 'react-dom';
// import * as serviceWorker from './serviceWorker';
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import rootReducer from './reducers/rootReducer'
import { getPosts } from './actions/Action'

const store = createStore(
    rootReducer,
    applyMiddleware(thunk, logger)
  )
  
store.dispatch(getPosts())

render(
<Provider store={store}>
    <App />
</Provider>,
document.getElementById('root')
)
// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();