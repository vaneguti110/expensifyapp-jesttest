import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {editExpense, removeExpense} from '../actions/expenses';

//props when seeing in the console contains a lot of info history, location, match 
const EditExpensePage = (props) => {
    return (
        <div>
            <ExpenseForm
                expense={props.expense}
                onSubmit={(expense) => {
                    //Dispatch the action to edit the expense
                    props.dispatch(editExpense(props.expense.id, expense));
                    
                    //Redirect to the dashboard
                    props.history.push('/');
                    // console.log('updated', expense);
                }}
            />
            <button onClick = {() => {
                dispatch(removeExpense({id: props.expense.id}));
                props.history.push('/');
            }}>Remove</button>
        </div>
    );
};

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)
    };
};

export default connect(mapStatetoProps)(EditExpensePage);