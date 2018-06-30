// @flow
import React from 'react'
import { connect } from 'react-redux'

type Props = {
  onIncrement: () => void,
  onDecrement: () => void,
  onChange: (string) => void,
  count: number,
  name: string,
}

class Counter extends React.Component<Props> {

  onIncrement = () => {
    this.props.onIncrement()
  }

  onDecrement() {
    this.props.onDecrement()
  }

  onChange = (e) => {
    this.props.onChange(e.target.value)
  }

  render() {
    return (
      <div>
        <h1>Redux example : counter and onchange</h1>
        <div>
          Age:
          <button onClick={this.onIncrement}>+</button>
          {this.props.count}
          <button onClick={this.onDecrement.bind(this)}>-</button><br /><br />
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

function mapDispatchToProps(dispatch) {
  return {
    onIncrement: () => {
      dispatch({
        type: 'INCREMENT'
      })
    },
    onDecrement: () => {
      dispatch({
        type: 'DECREMENT'
      })
    },
    onChange: (name) => {
      dispatch({
        type: 'ONCHANGE',
        name
      })
    }
  }
}

// connect Redux store to Counter
export default connect(mapStateToProps, mapDispatchToProps)(Counter)
