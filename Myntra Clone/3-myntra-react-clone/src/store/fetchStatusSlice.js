
import { createSlice } from "@reduxjs/toolkit";




const fetchStatusSlice=createSlice(
  {
    name:"fetchStatus",
    initialState:{
      fetchDone:false,//false->pending true->done
      currentlyFetching:false,
    },
    reducers:{
    markFetchDone:(state)=>{
       state.fetchDone=true;
    },
    markFetchingStarted:(state)=>{
       state.currentlyFetching=true;
    },
    markFetchingEnded:(state)=>{
       state.currentlyFetching=false;
    },
    }
  }
);




export const fetchStatusActions=fetchStatusSlice.actions;

export default fetchStatusSlice;

