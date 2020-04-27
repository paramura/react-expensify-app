

//SET_TEXT_FILTER

export const setTextFilterAction = ((text = '')=>{
    return({
        type: 'SET_TEXT_FILTER',
        text: text
    })
})

//SORT_BY_AMOUNT

export const sortByAmountAction = (()=>{
    return ({type: 'SORT_BY_AMOUNT'})
})

//SORT_BY_DATE

export const sortByDateAction = (()=>{
    return({
        type: 'SORT_BY_DATE'
    })
})

//SET_START_DATE

export const setStartDateAction = ((startDate=undefined)=>{
    return({
        type: 'SET_START_DATE',
        startDate: startDate
    })
});

//SET_END_DATE

export const setEndDateAction = ((endDate=undefined)=>{
    return({
        type: 'SET_END_DATE',
        endDate: endDate
    })
})