import React from 'react';
//import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const ExpenseListItem = ({ dispatch, id, description, amount, createdAt}) => {
    return (
        <div>
            <Link to={`/edit/${id}`}>
                <h3>{description}</h3>
            </Link>
            <p>
            {numeral(amount/100).format('$0,0.00')} 
            - 
            {moment(createdAt).format('MMMM Do, YYYY')}</p>  

        </div>
    )
}

//const ConnectedExpenseListItem = connect()(ExpenseListItem)

export default ExpenseListItem;