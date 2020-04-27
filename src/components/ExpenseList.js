import React from 'react';
import {connect} from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import GetVisibleFunction from '../selectors/expenses.js'

const ElementList = (props)=>{
    return(<div>
                <h1>Element List</h1>
                {props.expenses.map((expense)=>{
                    return(
                        <ExpenseListItem {...expense} />
                    )
                })}
                
            </div>)
};

const mapStateToProps = (state)=>{
    return(
        {expenses: GetVisibleFunction(state.expenses, state.filters)}
    )
};

const ConnectedElementList = connect(mapStateToProps)(ElementList)

export default ConnectedElementList;