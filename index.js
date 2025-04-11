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

    // SUBSCRIBING TO STATE CHANGES
    function subscribe(listener) {
        listeners.push(listener);
        return () => {
            listeners = listeners.filter(l => l !== listener);
        };
    }

    // INITIALIZE A ACTION
    dispatch({ type: '@@INIT' });

    return {
        getState,
        dispatch,
        subscribe
    };
}
// ---------------------

// TALLY APP USAGE
const store = theStore(theReducer);

console.log('Initial state:', store.getState()); // LOGS INITIAL STATE

// SUBSCRIBES LOG CHANGES
store.subscribe(() => {
    console.log('State changed:', store.getState());
});

// ADD TWICE, COUNT SHOULD BE 2
store.dispatch({ type: ADD });
store.dispatch({ type: ADD });

// SUBTRACT ONCE, COUNT SHOULD BE 1
store.dispatch({ type: SUBTRACT });

// RESET, COUNT SHOULD BE 0
store.dispatch({ type: RESET });

// ------------------------------