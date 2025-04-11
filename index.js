// TYPES OF ACTIONS

const ADD = 'ADD';
const SUBTRACT = 'SUBTRACT';
const RESET = 'RESET';
// -----------------

// THE TALLY APP REDUCER

function theReducer(state = { count: 0 }, action) {
    switch (action.type) {
        case ADD:
            return { count: state.count + 1 };
        case SUBTRACT:
            return { count: state.count - 1};
        case RESET:
            return { count: 0};
        default:
            return state;
    }
}
// ------------------

// CREATING STORE... REDUX STYLE

function theStore(reducer) {
    let state;
    let listeners = [];

    // GETS CURRENT STATE
    function getState() {
        return state;
    }

    // DISPATCHING THE ACTIONS
    function dispatch(action) {
        console.log(`Dispatching action:`, action);
        state = reducer(state, action);
        console.log(`New state:`, state);
        listeners.forEach(listener => listener());
    }
}