// select DOM elements
const counterEl = document.getElementById('counter');
const incrementEl = document.getElementById('increment');
const decrementEl = document.getElementById('decrement');

// initial state
const initialState = {
    value: 0
};

// reducer function
function counterReducer(state = initialState, action) {
    if (action.type === 'increment') {
        return {
            ...state,
            value: state.value + 1
        }
    } else if (action.type === 'decrement') {
        return {
            ...state,
            value: state.value - 1
        }
    } else {
        return state;
    }
}

// store
const store = Redux.createStore(counterReducer);

const render = () => {
    const state = store.getState();
    counterEl.innerText = state.value.toString();
};

render();

store.subscribe(render);

incrementEl.addEventListener('click', () => {
    store.dispatch({ type: 'increment' });
});

decrementEl.addEventListener('click', () => {
    store.dispatch({ type: 'decrement' });
});