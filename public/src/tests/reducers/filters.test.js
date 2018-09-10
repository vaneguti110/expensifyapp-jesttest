import moment from 'moment';
import filtersReducer from '../../reducers/filters';


//test setup default values
test('Should setup default filter values', () =>{
    const state = filtersReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual({
        text:'',
        sortBy:'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

//test set by sortBy amount
test('Should set sortBy to amount', () =>{
    const state = filtersReducer(undefined, {type:'SORT_BY_AMOUNT'});
    expect(state).toBe('amount');
});

//test set by sortBy date
test('Should set sortBy to date', () => {
   const currentState = {
    text:'',
    startDate: undefined,
    endDate: undefined,
    sortBy:'amount'
   };
   const action = {type: 'SORT_BY_DATE'};
   const state = filtersReducer(currentState, action);
   expect(state).toBe('date');
});

//text set text filter
//test set by sortBy amount
test('Should set text filter', () => {
    const text ='This is my filter';
    const action = {
        type: 'SET_TEXT_FILTER',
        text
    };
    const state = filtersReducer(undefined, action);
    expect(state.text).toBe(text);
});


//set startDate filter
test('Should set startDate filter', () => {
    const startDate = moment();
    const action = {
        type: 'SET_START_DATE',
        startDate
    };
    const state = filtersReducer(undefined, action);
    expect(state.startDate).toEqual(startDate);
});

//set endDate filter
test('Should set endDate filter', () => {
    const endDate = moment();
    const action = {
        type: 'SET_END_DATE',
        endDate
    };
    const state = filtersReducer(undefined, action);
    expect(state.endDate).toEqual(endDate);
});

