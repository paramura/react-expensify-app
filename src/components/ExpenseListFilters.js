import React from 'react';
import {connect} from 'react-redux';
import {setTextFilterAction, sortByDateAction, sortByAmountAction} from '../actions/filter_actions'

const ExpenseListFilters = (props) => {
    return(
        <div>
            <input type="text" value={props.filters.text} onChange={(e)=>{
                console.log(e.target.value)
                props.dispatch(setTextFilterAction(e.target.value))
            }}/>
            <select value={props.filters.sortBy} 
            onChange={(e)=>{
                    if (e.target.value=="date")
                     {props.dispatch(sortByDateAction())}
                     else if (e.target.value=="amount") 
                     {props.dispatch(sortByAmountAction())}
            }}>
                <option value="amount">Amount</option>
                <option value="date">Date</option>
            </select>
        </div>
    )
};


const ConnectedExpenseListFilters = connect((state)=>{
    return({
        filters: state.filters
    })
})(ExpenseListFilters)

export default ConnectedExpenseListFilters;