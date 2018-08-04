import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';
import { Provider } from 'react-redux'
import { createStore } from 'redux'

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
				name: action.name,
			}
		default:
			return state
	}
}

// create store
const store = createStore(
	reducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const action = type => store.dispatch({type})
const change = (type, name) => store.dispatch({type, name})

ReactDOM.render(
	// Provider: manage store in all app
	<Provider store={store}>
		<Counter 
      onIncrement={() => action('INCREMENT')}
      onDecrement={() => action('DECREMENT')}
      onChange={(e) => change('ONCHANGE', e)}
    />
	</Provider>, document.getElementById('root'));
