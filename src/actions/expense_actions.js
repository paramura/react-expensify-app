import uuid from 'uuid';


//ADD_EXPENSE
export const addExpenseAction = ({description='', note='',amount=0,createdAt=0}={}) => {
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
export const removeExpenseAction = ({id}={}) => {
    return({
        type: 'REMOVE_EXPENSE',
        expense: {
            id: id
        }
    })
};


//EDIT_EXPESE

export const editExpenseAction = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
  });
