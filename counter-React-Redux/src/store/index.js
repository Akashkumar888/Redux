
import {createStore} from 'redux';

const INITIAL_VALUE={
  counter:0
};


const counterReducer=(store=INITIAL_VALUE,action)=>{
let newCounterStore=store;
switch(action.type){
  case 'INCREMENT' :{
  newCounterStore={counter:store.counter + 1};
  break;
  } 
  case 'DECREMENT':{
  newCounterStore={counter:store.counter - 1};
  break;
  }
}
return newCounterStore;
}

const CounterStore=createStore(counterReducer);


export default CounterStore;



















// const subscriber=()=>{
//   const state=CounterStore.getState();
// };

// CounterStore.subscribe(subscriber);

// CounterStore.dispatch({type: 'INCREMENT'});
// CounterStore.dispatch({type:'DECREMENT'});



