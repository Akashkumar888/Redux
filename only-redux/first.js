// classic-redux.js

const { createStore, applyMiddleware, compose } = require('redux');
const { logger } = require('redux-logger');

// Initial state
const INITIAL_VALUE = { counter: 0 };

// Reducer
const reducer = (state = INITIAL_VALUE, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { counter: state.counter + 1 };
    case 'DECREMENT':
      return { counter: state.counter - 1 };
    case 'ADDITION':
      return { counter: state.counter + action.payload.number };
    default:
      return state;
  }
};

// Action creators
const increment = () => ({ type: 'INCREMENT' });
const decrement = () => ({ type: 'DECREMENT' });
const add = (number) => ({ type: 'ADDITION', payload: { number } });

// Store with logger middleware
const composeEnhancers = compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(logger)));

// Subscribe to store
store.subscribe(() => console.log('State:', store.getState()));

// Dispatching actions
store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(increment());
store.dispatch(add(7));
store.dispatch(decrement());

