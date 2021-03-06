import {setStartDate,setEndDate,setTextFilter,sortByDate,sortByAmount} from '../../actions/filters';
import moment from 'moment';


//Set start date
test('Should generate set start date action object', ()=>{
    const action = setStartDate([0]);
    expect(action).toEqual({
        type:'SET_START_DATE',
        startDate: moment(0)
    });
});

//Set End date
test('Should generate set start date action object', () => {
    const action = setEndDate([0]);
    expect(action).toEqual({
        type:'SET_END_DATE',
        endDate:moment(0),
    });
});

//Set Text Filter with text value
test('Should generate set text filter object with text value', () =>{
    const text = 'Something in';
    const action = setTextFilter(text);
    expect(action).toEqual({
        type:'SET_TEXT_FILTER',
        text
    });
});

//Set Text Filter with default value
test('Should generate set text filter object with default value', ()=>{
    const action = setTextFilter();
    expect(action).toEqual({
        type:'SET_TYPE_FILTER',
        text:''
    });
});

//test for sort DAte
test('Should generate action object for sort by date', ()=>{
    expect(sortByDate()).toEqual({type:'SORT_BY_DATE'});
})

//test for sort Amount
test('Should generate action object for sort by amount', () => {
    expect(sortByAmount()).toEqual({type: 'SORT_BY_AMOUNT'});
})
