import React, { useReducer } from 'react'

const reducer = (state, action) => {

    if (state.number > 0 && action.type === 'DECR') {
        state.number = state.number - 1;
        return { number: state.number }
    } else if (action.type === 'INCR') {
        state.number = state.number + 1;
        return { number: state.number }
    }
    return state;
}

const NumberRed = () => {
    const initialState = {
        number: 0
    };
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <>
            <h2 className='text-center'>Increament and Decreament Number with useReducer</h2>
            <div className='card number-wrap'>
                <div className='card-body'>
                    <h2 className='text-center'>{state.number}</h2>
                </div>
                <div className='card-footer d-flex justify-content-between'>
                    <button className='btn btn-danger' onClick={() => { dispatch({ type: 'DECR' }) }}>
                        Minus
                    </button>
                    <button className='btn btn-primary' onClick={() => { dispatch({ type: 'INCR' }) }}>
                        Plus
                    </button>
                </div>
            </div>
        </>
    )
}

export default NumberRed
