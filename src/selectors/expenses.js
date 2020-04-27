

const getVisibleFunction = ((expenses, {startDate, endDate, text, sortBy})=>{
    return ( expenses.filter((expense)=>{
        const startDateMatch = typeof startDate != 'number' || expense.createdAt>=startDate
        const endDateMatch = typeof endDate != 'number' || expense.createdAt>=endDate
        //const textMatch = true
        const textMatch = typeof text !='string' || expense.description.toLowerCase().includes(text.toLowerCase())
        return (endDateMatch && startDateMatch && textMatch)
    })
    ).sort((a, b)=>{
        if(sortBy=="date"){
            return a.createAt < b.createdAt ? 1 : -1
        }
        else if(sortBy=="amount"){return a.amount < b.amount ? 1 : -1}
    })
});

export default getVisibleFunction;