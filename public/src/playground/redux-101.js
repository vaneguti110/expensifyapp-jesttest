import { createStore } from 'redux';
//first procedure const store = createStore ((state)=> {});
//same procedure with state as: this.setState((previousState) => { return previousState; }); 


//Actions generators - functions that return action objects
// const add = ({a, b}, c) =>{
//     return a + b + c; //it will display 113
// };

// console.log(add ({a:1, b:12}, 100));


// const incrementCount = ({incrementBy = 1} = {}) => ({
//     type: 'INCREMENT',
//     incrementBy: typeof incrementBy === 'number' ? incrementBy : 1 
// });
const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy 
});

const decrementCount = ({ decrementBy = 1 } = {}) =>({
    type: 'DECREMENT',
    decrementBy
});

const setCount = ({count}) => ({
    type: 'SET',
    count
});

const resetCount = () => ({
    type: 'RESET',
});

//Reducers
//1. Reducers are pure functions
//2. Never change state or action


const countReducer = ((state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            //incrementBy = typeof action.incrementBy === "number" ? action.incrementBy : 1 
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            // const decrementBy = typeof action.decrementBy === "number" ? action.decrementBy : 1
            return {
                count: state.count - action.decrementBy
            };
        case 'SET':
            return {
                count: action.count
            }
        case 'RESET':
            return {
                count: 0
            };
        default:
            return state;
    }
});

const store = createStore(countReducer);

//another way to set increment with IF-statement
//     if (action.type === 'INCREMENT'){
//         return {
//             count: state.count + 1
//         };
//     } else {
//       return state;
//     }
// });
store.subscribe(() => {
    console.log(store.getState()); // we get the four states showing in console
});


//console.log(store.getState()); // we get in console an object with count of 0

//Actions - than an object that gets sent to the store
//increment, decrement, reset

//inline action generators
//increment the count by 5
// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// });

store.dispatch(incrementCount({incrementBy: 5}))

store.dispatch({
    type: 'INCREMENTT', //typo: incrementt but still increment
    incrementBy: 5
});

//action generators
store.dispatch(incrementCount()); //it will increment
//store.dispatch(incrementCountt()) //it will display errortypo incrementCount

//reset the count to zero
// store.dispatch({
//     type: 'RESET'
// });

//another way simpler and action generators
store.dispatch(resetCount());

//decrement the count 
// store.dispatch({
//     type: 'DECREMENT' // it will show -1 in console
// });

//another way simpler and action generators
store.dispatch(decrementCount());

//decrement the count by 10
// store.dispatch({
//     type: 'DECREMENT',
//     decrementBy: 10 // it will show -11 in console
// });     

//another way simpler and action generators
store.dispatch(decrementCount({decrementBy: 10}));

//set a value
// store.dispatch({
//     type: 'SET',
//     count: 101
// });

//another way simpler and action generators
store.dispatch(setCount({count: 101}));





