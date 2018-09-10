import moment from 'moment';
import selectExpenses from '../../selectors/expenses';
import expenses from '../fixtures/expenses';

// const expenses = [{
//     id:'1',
//     description:'Gum',
//     note:'',
//     amount: 195,
//     createdAt: 0
// }, {
//     id: '2',
//     description: 'Rent',
//     note: '',
//     amount: 109500,
//     createdAt: moment(0).subtract(1, 'days').valueOf()
//     },{
//     id: '3',
//     description: 'Credit Card',
//     note: '',
//     amount: 4500,
//         createdAt: moment(0).add(4, 'days').valueOf()
// }];

//test by text
test('Should filter by text value', () =>{
    const filters ={
        text:'e',
        sortBy:'date',
        startDate: undefined,
        endDate: undefined
    };
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([ expenses[2], expenses[1]])
});

//test by startDate
test('Should filter by startDate',() =>{
    const filters ={
        text:'',
        sortBy: 'date',
        startDate: moment(0),
        endDate: undefined
    };
    const result = selectExpenses([expenses, filters]);
    expect(result).toEqual([expenses[2], expenses[0]]);
});

//filter by endDate
test('Should filter by endDate', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: moment(0).add(2, 'days'), //add 2 days in future
    };
    const result = selectExpenses([expenses, filters]);
    expect(result).toEqual([expenses[0], expenses[1]]);
});

//sort by date
test('Should sort by date', () =>{
    const filters = {
        text:'',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    };
    const result = selectExpenses([expenses, filters]);
    expect(result).toEqual([expenses[2],expenses[0]], expenses[1]);
});

//sort by amount
test('Should sort by amount', () => {
    const filters = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    };
    const result = selectExpenses([expenses, filters]);
    expect(result).toEqual([expenses[1], expenses[2]], expenses[0]);
});

