import { createSlice } from "@reduxjs/toolkit";


const counterSlice=createSlice(
  {
    name:'counter',
    initialState: {counterVal:0,},
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
    }
  }
);

export const counterActions=counterSlice.actions;

export default counterSlice;
