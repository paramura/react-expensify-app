import React from 'react';
import ExpenseForm from './ExpenseForm';
import {connect} from 'react-redux';
import {addExpenseAction} from '../actions/expense_actions'

const CreateExpensePage = (props) => {
    return(<div>
        <h1>Create Expense</h1>
        <ExpenseForm onSubmit={(element)=>{
            props.dispatch(addExpenseAction(element));
            props.history.push("/");
        }}/>
        </div>)   
 };

 const ConnectedCreateExpensePage = connect()(CreateExpensePage)

 export default ConnectedCreateExpensePage;