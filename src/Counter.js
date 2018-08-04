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

type State = {
  count: number,
  name: string,
}

class Counter extends React.Component<Props> {
  render() {
    const { onIncrement, onDecrement, onChange } = this.props
    return (
      <div>
        <h1>Redux example : counter and onchange</h1>
        <div>
          Age:
          <button onClick={onIncrement}>+</button>
          {this.props.count}
          <button onClick={onDecrement}>-</button><br /><br />
        </div>
        <div>
          name:
          <input type='text' onChange={(e: SyntheticEvent<HTMLInputElement>)=> onChange(e.currentTarget.value)} />
          <h3>{this.props.name}</h3>
        </div>
      </div>
    )
  }
}

// transforms the Redux state into an object containing props.
function mapStateToProps(state: State) {
  return {
    count: state.count,
    name: state.name,
  }
}

function mapDispatchToProps(dispatch: Function) {
  return {

  }
}

// connect Redux store to Counter
export default connect(mapStateToProps, mapDispatchToProps)(Counter)
