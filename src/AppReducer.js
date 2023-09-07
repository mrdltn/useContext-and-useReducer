import React, {useReducer} from "react";


const limitRGB = (num) => (num < 0 ? 0 : num > 255 ? 255 : num);
const step = 50;

const reducer = (state, action) => {
    switch(action.type) {
        case "INCREMENT_R":
            return {
                ...state,
                r: limitRGB(state.r + step)
            };
        case "DECREMENT_R":
            return {
                ...state,
                r: limitRGB(state.r - step)
            };
        case "INCREMENT_G":
            return {
                ...state,
                g: limitRGB(state.g + step)
            };
        case "DECREMENT_G":
            return {
                ...state,
                g: limitRGB(state.g - step)
            };
        case "INCREMENT_B":
            return {
                ...state,
                b: limitRGB(state.b + step)
            };
        case "DECREMENT_B":
            return {
                ...state,
                b: limitRGB(state.b - step)
            };
        default:
            return state;
    }      
}

export default function AppRed() {
    const [{r, g, b}, dispatch] = useReducer(reducer, {r: 0, g: 50, b: 100})

    return (
        <div className="App" style={{textAlign: 'center'}}>
            <h1 style={{color: `rgb(${r}, ${g}, ${b})`}}>
                using Reducer
            </h1>
            <div>
                <span>R </span>
                <button onClick={() => dispatch({type: 'INCREMENT_R'})}>+</button>
                <button onClick={() => dispatch({type: 'DECREMENT_R'})}>-</button>
            </div>
            <div>
                <span>G </span>
                <button onClick={() => dispatch({type: 'INCREMENT_G'})}>+</button>
                <button onClick={() => dispatch({type: 'DECREMENT_G'})}>-</button>
            </div>
            <div>
                <span>B </span>
                <button onClick={() => dispatch({type: 'INCREMENT_B'})}>+</button>
                <button onClick={() => dispatch({type: 'DECREMENT_B'})}>-</button>
            </div>
        </div>
    )
}