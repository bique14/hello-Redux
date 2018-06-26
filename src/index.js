import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import registerServiceWorker from './registerServiceWorker';

// init state
const initialState = {
	count: 20,
	name: '',
}

// take current state and action then return new state
function reducer(state = initialState, action) {
	switch (action.type) {
		case 'INCREMENT':
			return {
				...state,
				count: state.count + 1,
			}
		case 'DECREMENT':
			return {
				...state,
				count: state.count - 1,
			}
		case 'ONCHANGE':
			return {
				...state,
				name: action.text,
			}
		default:
			return state
	}
}

// create store
const store = createStore(reducer)

ReactDOM.render(
	// Provider: manage store in all app
	<Provider store={store}>
		<Counter />
	</Provider>, document.getElementById('root'));
registerServiceWorker();
