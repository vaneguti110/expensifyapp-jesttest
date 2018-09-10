import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from './actions/expenses';
//import './styles/styles.css';
import 'normalize-css/normalize.css';
import './styles/styles.scss';

const store = configureStore();
//addExpense -> Water bill
store.dispatch(addExpense({description: 'Water bill', amount: 4500}))

//addExpense -> Gas bill
store.dispatch(addExpense({description: 'Gas bill', createdAt: 1000}))

//addExpense -> Water bill
store.dispatch(addExpense({description: 'Rent', amount: 109500}))

//setTextFilter -> bill (2 items) -> (1 item)
store.dispatch(setTextFilter('water'));

// //settimmeout for filtertext
// setTimeout(() => {
//     store.dispatch(setTextFilter('bill'));
// }, 3000);

//getVisibleExpenses -> print visibles ones to screen
const state = store.getState();
const getVisibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(VisibleExpenses);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>);

ReactDOM.render(<jsx />, document.getElementById('app'));