
import {configureStore, createSlice} from '@reduxjs/toolkit'




const counterSlice=createSlice(
  {
    name:'counter',
    initialState:{
      counterVal:0,
      privacy:false
    },
    reducers:{
      increment: ( state )=>{
      state.counterVal+=1;
      },
      decrement: (state)=>{
      state.counterVal-=1;
      },
      add : (state, action)=>{
      state.counterVal+=action.payload.num;
      },
      subtract : (state, action)=>{
      state.counterVal-=action.payload.num;
      },
      clear: (state)=>{
        state.counterVal=0;
      },
      privacyToggle :(state)=>{
        state.privacy = (!state.privacy);
      }
    }
  }
);






const CounterStore=configureStore(
  {
  reducer:{
    counter:counterSlice.reducer,
    }
  }
);

export const counterActions=counterSlice.actions;


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



