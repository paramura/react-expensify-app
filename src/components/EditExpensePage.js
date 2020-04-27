import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {editExpenseAction, removeExpenseAction} from '../actions/expense_actions'

const EditExpensePage =(props) =>{
    console.log(props);
    return(<div>
            <ExpenseForm 
            expense={props.expense}
            onSubmit={(expense)=>{
                    console.log('updated',expense);
                    console.log(props.expense.id);
                    props.dispatch(editExpenseAction(props.expense.id,expense))
                    props.history.push("/")
            }}
            />
            <button onClick={()=>{
                console.log('Inside Remove action : ',props.expense.id)
                props.dispatch(removeExpenseAction({id: props.expense.id}))
                props.history.push("/")
            }}>Remove</button>

         </div>)
}


const ConnectedEditExpensePage = connect((state, props)=>{
    return({
        expense: state.expenses.find((expense)=>{
            return(
                expense.id==props.match.params.id
            )
        })
    })
})(EditExpensePage)

export default ConnectedEditExpensePage;