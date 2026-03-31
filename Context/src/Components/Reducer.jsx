import React, { useReducer } from 'react'

function reducer(state, action) {
    if (action.type === "add")
        return state + 1;
    if (action.type === "subtract")
        return state - 1;
    return state;
}

const Reducer = () => {

    const [count, dispatch] = useReducer(reducer, 0);

    return (
        <div>
            <p>{count}</p>
            <button onClick={() => dispatch({type : "add"})}>+</button>
            <button onClick={() => dispatch({type : "subtract"})}>-</button>
        </div>
    )
}

export default Reducer
