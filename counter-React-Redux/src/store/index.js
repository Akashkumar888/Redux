
import {createStore} from 'redux';

const INITIAL_VALUE={
  counter:0,
  privacy:false
};



// const counterReducer=(store=INITIAL_VALUE,action)=>{
// switch(action.type){
//   case 'INCREMENT' :{
//     return {counter:store.counter + 1, privacy:store.privacy};
//   } 
//   case 'DECREMENT':{
//     return {counter:store.counter - 1, privacy:store.privacy};
//   }
//   case 'ADD' :{
//     return {counter:store.counter + action.payload.num, privacy:store.privacy};
//   } 
//   case 'SUBTRACT':{
//     return {counter:store.counter - action.payload.num, privacy:store.privacy};
//   }
//   case 'PRIVACY_TOGGLE':{
//     // privacy= (!privacy);
//     return {privacy: !store.privacy, counter:store.counter};
//   }
//   default:
//     return store;
// }
// }


const counterReducer=(store=INITIAL_VALUE,action)=>{
switch(action.type){
  case 'INCREMENT' :{
    return {...store, counter:store.counter + 1};
  } 
  case 'DECREMENT':{
    return {...store, counter:store.counter - 1};
  }
  case 'ADD' :{
    return {...store, counter:store.counter + action.payload.num};
  } 
  case 'SUBTRACT':{
    return {...store, counter:store.counter - action.payload.num};
  }
  case 'PRIVACY_TOGGLE':{
    // privacy= (!privacy);
    return {...store, privacy: !store.privacy};
  }
  case 'CLEAR':{
    // privacy= (!privacy);
    return {...store, counter: 0};
  }
  default:
    return store;
}
}



const CounterStore=createStore(counterReducer);


export default CounterStore;



















// const subscriber=()=>{
//   const state=CounterStore.getState();
// };

// CounterStore.subscribe(subscriber);

// CounterStore.dispatch({type: 'INCREMENT'});
// CounterStore.dispatch({type:'DECREMENT'});



