import {createStore, combineReducers} from 'redux';
import uuid from 'uuid';


//ADD_EXPENSE
const addExpenseAction = ({description='', note='',amount=0,createdAt=0}={}) => {
    return (
        {
            type: 'ADD_EXPENSE',
            expense: {
                id: uuid(),
                description: description,
                note: note,
                amount: amount,
                createdAt: createdAt
            }
        }
    )
};

//REMOVE_EXPENSE
const removeExpenseAction = ({id}={}) => {
    return({
        type: 'REMOVE_EXPENSE',
        expense: {
            id: id
        }
    })
};


//EDIT_EXPESE

const editExpenseAction = ((id, updates)=>{
    return({
        type: 'EDIT_EXPENSE',
        id: id,
        updates: updates
    })
})



const expenseReducerDefaultState = []

const expenseReducer = (state = expenseReducerDefaultState, action) => {
   // console.log(state);
   // console.log(action);
    switch(action.type){
        case 'ADD_EXPENSE':{
            return [...state, action.expense]};
        case 'REMOVE_EXPENSE':{
            return state.filter(({ id }) => {return id !== action.expense.id}
            )
        }
        case 'EDIT_EXPENSE':{
            return state.map((expense)=>{
                if(expense.id === action.id){
                    return{  ...expense,
                        ...action.updates
                    }
                }
                else {expense}

            })
        }
        default:
            return state;
    }    
};



//SET_TEXT_FILTER

const setTextFilterAction = ((text = '')=>{
    return({
        type: 'SET_TEXT_FILTER',
        text: text
    })
})


const sortByAmountAction = (()=>{
    return ({type: 'SORT_BY_AMOUNT'})
})


const sortByDateAction = (()=>{
    return({
        type: 'SORT_BY_DATE'
    })
})


const setStartDateAction = ((startDate=undefined)=>{
    return({
        type: 'SET_START_DATE',
        startDate: startDate
    })
});

const setEndDateAction = ((endDate=undefined)=>{
    return({
        type: 'SET_END_DATE',
        endDate: endDate
    })
})

const filterReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

const filterReducer = (state=filterReducerDefaultState, action) => {
    switch(action.type){
        case 'SET_TEXT_FILTER':{
            return({
                ...state, text:action.text
            })
        }
        case 'SORT_BY_AMOUNT':{
            return({
                ...state, sortBy:'amount'
            })
        }
        case 'SORT_BY_DATE':{
            return({
                ...state, sortBy:'date'
            })
        }
        case 'SET_START_DATE':{
            return({
                ...state, startDate:action.startDate
            })
        }
        case 'SET_END_DATE':{
            return({
                ...state, endDate:action.endDate
            })
        }
        default:
            return state;
    }
}

const store = createStore(
    combineReducers(
        {expenses: expenseReducer,
        filters: filterReducer}
    )
);

//get Visible Expenses


const getVisibleFunction = ((expenses, {startDate, endDate, text, sortBy})=>{
    return ( expenses.filter((expense)=>{
        const startDateMatch = typeof startDate != 'number' || expense.createdAt>=startDate
        const endDateMatch = typeof endDate != 'number' || expense.createdAt>=endDate
        const textMatch = true
       // const textMatch = typeof text !='string' || expense.description.toLowerCase().includes(text.toLowerCase())
        return (endDateMatch && startDateMatch && textMatch)
    })
    ).sort((a, b)=>{
        if(sortBy=="date"){
            return a.createAt < b.createdAt ? 1 :-1
        }
        else {return a.amount < b.amount ? 1 : -1}
    })
});


store.subscribe(()=>{
    const state = store.getState();
    const visibleExpenses = getVisibleFunction(state.expenses,state.filters);
    console.log(visibleExpenses);
})



const expenseOne = store.dispatch(addExpenseAction({description: "Rent", amount: 100, createdAt:-21000}));
const expenseTwo = store.dispatch(addExpenseAction({description: "Coffee", amount: 300, createdAt:-101000}));

store.dispatch(sortByAmountAction());


store.dispatch(editExpenseAction(expenseTwo.expense.id,{amount:500}));

/*store.dispatch(removeExpenseAction({id: expenseOne.expense.id}));

store.dispatch(editExpenseAction(expenseTwo.expense.id,{amount:500}));

store.dispatch(setTextFilterAction('rent'));
store.dispatch(setTextFilterAction(''));

store.dispatch(sortByAmountAction());
store.dispatch(sortByDateAction());

store.dispatch(setStartDateAction(125));
store.dispatch(setStartDateAction());

store.dispatch(setEndDateAction(1250));*/


const demoState = {
    expenses: [{
        id: 'asdhflakdsjf',
        description : 'January Rent',
        note: 'some thingsajsdfl',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', //amount or date
        startDate: undefined,
        endDate: undefined
    }
};



