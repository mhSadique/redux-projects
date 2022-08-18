// select dom elements
const counterEl = document.getElementById("counter");
const incrementEl = document.getElementById("increment");
const decrementEl = document.getElementById("decrement");
const addCounterEl = document.getElementById("add-counter");
const countersEl = document.getElementById("counters");
const counters = document.querySelectorAll('div[data-counter-id]');
console.log(counters)

// counters.forEach((item, index) => {
//     item.dataset.counterId = index;
// })

const INCREMENT = 'increment';
const DECREMENT = 'decrement';

// initial state
const initialState = {
    counterCounts: 1,
    counterValues: [
        { counterId: 1, value: 0 }
    ]
};

function counterReducer(state = initialState, action) {
    if (action.type === INCREMENT) {
        // write all the logic here
        // filter the items by the id we get from dataset property
    } else if (action.type === DECREMENT) {

    } else {
        return state;
    }
}


// addCounterEl.addEventListener('click', () => {
//     const div = document.createElement('div');
//     div.className = 'mx-auto max-w-md mt-10 space-y-5';
//     div.innerHTML = `
//                         <div class="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
//                         <div id="counter" class="text-2xl font-semibold" data-counter-id>0</div>
//                             <div class="flex space-x-3">
//                                 <button id="increment" class="bg-indigo-400 text-white px-3 py-2 rounded shadow" id="increment">
//                                     Increment
//                                 </button>
//                                 <button id="decrement" class="bg-red-400 text-white px-3 py-2 rounded shadow" id="decrement">
//                                     Decrement
//                                 </button>
//                             </div>
//                         </div>
//                     `;
//     countersEl.appendChild(div);

//     // console.log(document.querySelectorAll('div[data-counter-id]'));

//     document.querySelectorAll('div[data-counter-id]').forEach((item, index) => {
//         item.dataset.counterId = index;
//     })
// })
