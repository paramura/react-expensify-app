
import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter.js'
import configureStore from './store/configureStore';
import {Provider, connect} from 'react-redux';
import {addExpenseAction, editExpenseAction} from './actions/expense_actions';
import {setTextFilterAction, sortByDateAction, sortByAmountAction} from './actions/filter_actions';
import getVisibleFunction from './selectors/expenses';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

//console.log('Starting State :',store.getState());


store.subscribe(()=>{
    const state = store.getState();
    console.log(state);
    const visibleExpenses = getVisibleFunction(state.expenses,state.filters); 
})

//const expenseOne = store.dispatch(addExpenseAction({description: "Water Bill", amount: 1000, createdAt:240000}));
//const expenseTwo = store.dispatch(addExpenseAction({description: "Gas Bill", amount: 1500, createdAt:220000}));



const jsx = <Provider store={store}>
                <AppRouter />
            </Provider>

ReactDOM.render(jsx, document.getElementById('app'));

