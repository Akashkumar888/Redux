
import {configureStore} from '@reduxjs/toolkit'


import counterSlice from './counter';
import privacySlice from './privacy'






const CounterStore=configureStore(
  {
  reducer:{
    counter:counterSlice.reducer,
    privacy:privacySlice.reducer,
    }
  }
);


export default CounterStore;






// const INITIAL_VALUE={
//   counter:0,
//   privacy:false
// };
// const counterReducer=(store=INITIAL_VALUE,action)=>{
// switch(action.type){
//   case 'INCREMENT' :{
//     return {...store, counter:store.counter + 1};
//   } 
//   case 'DECREMENT':{
//     return {...store, counter:store.counter - 1};
//   }
//   case 'ADD' :{
//     return {...store, counter:store.counter + action.payload.num};
//   } 
//   case 'SUBTRACT':{
//     return {...store, counter:store.counter - action.payload.num};
//   }
//   case 'PRIVACY_TOGGLE':{
//     // privacy= (!privacy);
//     return {...store, privacy: !store.privacy};
//   }
//   case 'CLEAR':{
//     // privacy= (!privacy);
//     return {...store, counter: 0};
//   }
//   default:
//     return store;
// }
// }














// const subscriber=()=>{
//   const state=CounterStore.getState();
// };

// CounterStore.subscribe(subscriber);

// CounterStore.dispatch({type: 'INCREMENT'});
// CounterStore.dispatch({type:'DECREMENT'});



