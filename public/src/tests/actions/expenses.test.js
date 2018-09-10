
import {addExpense, editExpense, removeExpense} from '../../actions/expenses';

//test removeExpense
test('Should setup remove expense action object', () =>{
    const action = removeExpense({id:'123abc'});
    //we used .toEqual(for objects or array ) .toBe (boolean, numbers or string)
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id:'123abc'
    });
});

//test editExpense
test('Should setup edit expense action object', () => {
    const action = editExpense({id:'123abc', note:'New note value'});
    expect(action).toEqual({
        type:'EDIT_EXPENSE',
        id:'123abc',
        updates: {
            note: 'New note value',
        }
    });
});

//test addExpense
test('Should setup add expense action object', () =>{
    const action = addExpense({
        description: '',
        note: '',
        amount:0,
        createdAt: 0,
    });
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        id: uuid(),
        description:'',
        note:'',
        amount:0,
        createdAt:0
    });
});

//test with passing values
test('Should setup add expense action object with provided values', () =>{
    const expenseData = {
        description: 'Rent',
        amount:109500,
        createdAt:1000,
        note: 'This was last months rent'
    };
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense:{
            ...expenseData,
            id:expect.any(String)
        }
    });
});


//test with default values
test('Should setup add expense action object with default values', () =>{
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense:{
            id: expect.any(String),
            description: '',
            note: '',
            amount: 0,
            createdAt: 0
        }
        
    })
});
