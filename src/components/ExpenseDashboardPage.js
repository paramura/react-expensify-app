import React from 'react';
import ElementList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';

const ExpenseDashboardPage = () => {
    return (<div>
                <ExpenseListFilters />
                <ElementList />
            </div>)  
} ;

export default ExpenseDashboardPage;