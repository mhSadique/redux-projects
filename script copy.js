// select dom elements
const counterEl = document.getElementById("counter");
const incrementEl = document.getElementById("increment");
const decrementEl = document.getElementById("decrement");
const addCounterEl = document.getElementById("add-counter");
const countersEl = document.getElementById("counters");

const INCREMENT = 'increment';
const DECREMENT = 'decrement';

// initial state
const initialState = {
    value: 0,
};

// action creators
const increment = (value) => {
    return {
        type: INCREMENT,
        payload: value
    }
};

const decrement = (value) => {
    return {
        type: DECREMENT,
        payload: value
    }
}

// create reducer function
function counterReducer(state = initialState, action) {
    if (action.type === INCREMENT) {
        return {
            ...state,
            value: state.value + action.payload,
        };
    } else if (action.type === DECREMENT) {
        return {
            ...state,
            value: state.value - action.payload,
        };
    } else {
        return state;
    }
}

// create store
const store = Redux.createStore(counterReducer);

const render = () => {
    const state = store.getState();
    counterEl.innerText = state.value.toString();
};

// update UI initially
render();

store.subscribe(render);

// button click listeners
incrementEl.addEventListener("click", () => {
    store.dispatch(increment(10));
});

decrementEl.addEventListener("click", () => {
    store.dispatch(decrement(30));
});

addCounterEl.addEventListener('click', () => {
    const div = document.createElement('div');
    div.className = 'mx-auto max-w-md mt-10 space-y-5';
    div.innerHTML = `
                        <div class="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
                        <div id="counter" class="text-2xl font-semibold">0</div>
                            <div class="flex space-x-3">
                                <button id="increment" class="bg-indigo-400 text-white px-3 py-2 rounded shadow" id="increment">
                                    Increment
                                </button>
                                <button id="decrement" class="bg-red-400 text-white px-3 py-2 rounded shadow" id="decrement">
                                    Decrement
                                </button>
                            </div>
                        </div>
                    `;
    countersEl.appendChild(div);
})
