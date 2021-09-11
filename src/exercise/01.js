// useReducer: simple Counter
// 💯 accept the step as the action
// http://localhost:3000/isolated/final/01.extra-1.js

import * as React from 'react'

const countReducer = (state, {type, step}) => {
  const action = {
    INCREMENT: state.count + step,
    DECREMENT: state.count - step,
  }

  return {
    ...state,
    count: action[type],
  }
}

function Counter({initialCount = 0, step = 1}) {
  const [state, dispatch] = React.useReducer(countReducer, {
    count: initialCount,
  })
  const {count} = state

  const increment = () => dispatch({type: 'INCREMENT', step})
  return <button onClick={increment}>{count}</button>
}

function Usage() {
  return <Counter />
}

export default Usage
