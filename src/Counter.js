import React from 'react'
import { connect } from 'react-redux'

class Counter extends React.Component {

  onIncrement = () => {
    this.props.dispatch({
      type: 'INCREMENT'
    })
  }

  onDecrement = () => {
    this.props.dispatch({
      type: 'DECREMENT'
    })
  }

  onChange = (e) => {
    this.props.dispatch({
      type: 'ONCHANGE',
      text: e.target.value
    })
  }

  render() {
    return (
      <div>
        <h1>Redux example : counter and onchange</h1>
        <div>
          Age:
          <button onClick={this.onIncrement}>+</button>
          {this.props.count}
          <button onClick={this.onDecrement}>-</button><br /><br />
        </div>
        <div>
          name:
          <input type='text' onChange={this.onChange}/>
          <h3>{this.props.name}</h3>
        </div>
      </div>
    )
  }
}

// transforms the Redux state into an object containing props.
function mapStateToProps(state) {
  return {
    count: state.count,
    name: state.name,
  }
}

// connect Redux store to Counter
export default connect(mapStateToProps)(Counter)
