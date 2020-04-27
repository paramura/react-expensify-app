import  {createStore}  from "redux";

const incrementor = ({incrementBy = 1})=> {return({
    type : 'INCREMENT',
    incrementBy: incrementBy
    })
};

const decrementor = ({decrementBy = 1})=>{
    return(
        {type: 'DECREMENT',
        decrementBy: decrementBy
        }
    )
}
;

const setter = ({count = 0})=>{
    return({
        type : 'SET',
        count: count

    })
};

const resetter = ()=>{
    return({
        type: 'RESET'
    })
};

const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            const increment = typeof(action.incrementBy)=='number'?action.incrementBy:1
            return ({ count: state.count + increment })
        case 'DECREMENT':
            const decrement= typeof(action.decrementBy)=='number'?action.decrementBy:1
            return ({ count: state.count - decrement })
        case 'RESET':
            return ({ count: 0 })
        case 'SET':
            return ({ 
                count: action.count
            })
        default:
            return state
    }
};

const store = createStore(countReducer);

store.subscribe(() => {
    console.log(store.getState())
});

store.dispatch(incrementor({incrementBy:5}));

store.dispatch(incrementor({}));

store.dispatch(incrementor({}));

store.dispatch(decrementor({}));

store.dispatch(decrementor({decrementBy:5}));

store.dispatch(resetter());

store.dispatch(setter({count:150}));

store.dispatch(setter({}));

