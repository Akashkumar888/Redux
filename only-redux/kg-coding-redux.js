
const redux=require('redux');

const INITIAL_VALUE={
  counter:0
};


// const reducer=(store=INITIAL_VALUE,action)=>{
//   let newStore=store;
//   if(action.type==='INCREMENT'){
//     newStore={counter:store.counter+1}
//   }
//   else if(action.type==='DECREMENT'){
//     newStore={counter:store.counter-1}
//   }
//   else if(action.type==='ADDITION'){
//     newStore={counter:store.counter+action.payload.number};
//   }
//   // console.log("Reducer called",action);
// return newStore;
// }

const reducer = (state = INITIAL_VALUE, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { counter: state.counter + 1 };

    case 'DECREMENT':
      return { counter: state.counter - 1 };

    case 'ADDITION':
      return { counter: state.counter + action.payload.number };

    default:
      return state;          // <‑‑ very important!
  }
};


const store=redux.createStore(reducer);

const subscriber=()=>{
const state=store.getState();
console.log(state);

}

store.subscribe(subscriber);

store.dispatch({type:'INCREMENT'});
store.dispatch({type:'DECREMENT'});
store.dispatch({type:'INCREMENT'});
store.dispatch({type:'ADDITION',payload:{
  number:7
}});
store.dispatch({type:'DECREMENT'});


