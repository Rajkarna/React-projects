import {createStore}  from 'redux'


const INITIAL_STATE = {
    count : 0
}

const counterReducer = (state = INITIAL_STATE, action) => {
    let newCount = state
    if(action.type === "INCREMENT"){
        newCount = {...state, count : state.count + 1}
    } else if(action.type === "DECREMENT"){
        newCount = {...state, count : state.count - 1}
    } else if(action.type === "ADD"){
        newCount = {...state, count : state.count + +action.payload}
    }else if(action.type === "SUB"){
        newCount = {...state, count : state.count - +action.payload}
    }
    return newCount
}

const store = createStore(counterReducer)

export default store