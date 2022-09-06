// select dom elements
const counterEl = document.getElementById("counter"); // text counting the number
const incrementEl = document.getElementById("increment"); // increment button
const decrementEl = document.getElementById("decrement"); // decrement buton
const addCounterEl = document.getElementById("add-counter"); // add new counter button
const countersEl = document.getElementById("counters"); // parents of all counters
const resetButton = document.getElementById("reset"); // parents of all counters
const counters = document.querySelectorAll('div[data-counter-id]'); // array of all counters

const INCREMENT = 'increment';
const DECREMENT = 'decrement';
const ADD_COUNTER = 'addCounter';
const RESET = 'reset';

// initial state
const initialState = {
    initialCount: 0,
    countersCount: 1,
    counters: {
        1: { value: 0 }
    }
};

function counterReducer(state = initialState, action) {
    // console.log('inside reducer start', state);
    if (action.type === INCREMENT) {
        return {
            ...state,
            counters: {
                ...state.counters,
                [action.counterId]: { value: state.counters[action.counterId].value + action.incrementBy }
            }
        }
    } else if (action.type === DECREMENT) {
        return {
            ...state,
            counters: {
                ...state.counters,
                [action.counterId]: { value: state.counters[action.counterId].value - action.decrementBy }
            }
        }
    } else if (action.type === ADD_COUNTER) {
        return {
            ...state,
            countersCount: state.countersCount + 1,
            counters: {
                ...state.counters,
                [state.countersCount + 1]: { value: 0 }
            }
        }
    } else if (action.type === RESET) {
        const newCounters = state.counters;
        for (let key in newCounters) {
            newCounters[key] = { value: 0 }
        }
        return {
            ...state,
            counters: {
                ...newCounters
            }
        }
    }
    else {
        // console.log('inside reducer end', state);
        return state;
    }
}

const store = Redux.createStore(counterReducer);


const render = () => {
    const counters = document.querySelectorAll('div[data-counter-id]');
    // console.log('render called');
    const state = store.getState();
    console.log('STATE', state);
    // console.log('COUNTERS', counters);
    counters.forEach((counter, index) => {
        console.log('COUNTER', counter);
        console.log('ID', counter.dataset.counterId);
        console.log(counter.dataset.counterId === String(index + 1));
        if (counter.dataset.counterId === String(index + 1)) {
            counter.innerText = state.counters[index + 1].value.toString();
        }
    })
};

render();
store.subscribe(render);

function increase(counterId, incrementBy) {
    console.log('inside increment');
    store.dispatch({
        type: INCREMENT,
        counterId,
        incrementBy: incrementBy + +counterId
    });
}

function decrease(counterId, decrementBy) {
    console.log('inside decrement');
    store.dispatch({
        type: DECREMENT,
        counterId,
        decrementBy: decrementBy + +counterId
    });
}

resetButton.addEventListener('click', () => {
    store.dispatch({
        type: RESET
    })
})


addCounterEl.addEventListener('click', () => {
    store.dispatch({
        type: ADD_COUNTER
    })
    const state = store.getState();
    // console.log('inside zyx', state.countersCount);

    const div = document.createElement('div');
    div.className = 'mx-auto max-w-md mt-10 space-y-5';
    div.innerHTML = `
                        <div class="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
                        <div id="counter" class="text-2xl font-semibold" data-counter-id=${state.countersCount}>${state.initialCount}</div>
                            <div class="flex space-x-3">
                                <button 
                                    id="increment" 
                                    class="bg-indigo-400 text-white px-3 py-2 rounded shadow" data-increment-button-id="${state.countersCount}" onclick="increase(${state.countersCount},${5})">
                                    Increment
                                </button>
                                <button id="decrement" class="bg-red-400 text-white px-3 py-2 rounded shadow" 
                                data-decrement-button-id="${state.countersCount}" onclick="decrease(${state.countersCount},${5})">
                                    Decrement
                                </button>
                            </div>
                        </div>
                    `;
    countersEl.appendChild(div);
    // console.log(`${initialState.countersCount}${5}`);


    // document.querySelectorAll('div[data-counter-id]').forEach((item, index) => {
    //     console.log(item.dataset.counterId)
    //     console.log(item)
    // })
    console.log(document.querySelectorAll('div[data-counter-id]'));

    // const stateNew = store.getState();
    // console.log('new', stateNew);
})
