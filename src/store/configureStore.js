import {createStore, combineReducers} from 'redux';
import expenseReducer from '../reducers/expense_reducer';
import filterReducer from '../reducers/filter_reducer';

const store=(()=>{
    return createStore(
        combineReducers(
            {expenses: expenseReducer,
            filters: filterReducer}
        ),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
})

export default store;