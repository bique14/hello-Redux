# Playground with React-redux
---

###### initial state
```
const initialState = {
	count: 20,
	name: '',
}
```

###### take current state and action then return new state
```
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
```
const store = createStore(reducer)
```

###### Provider: manage store in all app
```
<Provider store={store}>
  // component
</Provider>, document.getElementById('root'));
```

###### dispatch: send action to createStore
```
onIncrement = () => {
  this.props.dispatch({
    type: 'INCREMENT'
  })
}
```


###### transforms the Redux state into an object containing props.
```
function mapStateToProps(state) {
  return {
    // state in initialState
  }
}
```


###### connect Redux store to Counter
```
import { connect } from 'react-redux'
...
...
...
export default connect(mapStateToProps)(Counter)
```
