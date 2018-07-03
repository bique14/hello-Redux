# Playground with React-redux

## Docker
```
docker pull bique14/hello-redux
docker run -p 80:80 bique14/hello-redux
```
---

###### initial state
```js
const initialState = {
	count: 20,
	name: '',
}
```

###### take current state and action then return new state
```js
function reducer(state = initialState, action) {
  switch(action.type) {
    case 1:
      return { ?prevState, newState }
    case 2:
      return { ?prevState, newState }
    default:
      return state
  }
}
```

###### create store
```js
const store = createStore(reducer)
```

###### Provider: manage store in all app
```js
<Provider store={store}>
  // component
</Provider>, document.getElementById('root'));
```

###### dispatch: send action to createStore
```js
onIncrement = () => {
  this.props.dispatch({
    type: 'INCREMENT'
  })
}
```


###### transforms the Redux state into an object containing props.
```js
function mapStateToProps(state) {
  return {
    // state in initialState
  }
}
```


###### connect Redux store to Counter
```js
import { connect } from 'react-redux'
...
...
...
export default connect(mapStateToProps)(Counter)
```
