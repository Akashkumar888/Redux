

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemActions } from "../store/itemSlice";
import { fetchStatusActions } from "../store/fetchStatusSlice";

const FetchItems=()=>{
  const fetchStatus = useSelector((state) => state.fetchStatus);

  const dispatch=useDispatch();
  useEffect(()=>{
    if(fetchStatus.fetchDone)return;

    dispatch(fetchStatusActions.markFetchingStarted());
    const controller=new AbortController();
    const signal=controller.signal;
    fetch("http://localhost:8080/items",{signal})
    .then((res)=>res.json())
    .then(({items})=>{
      dispatch(fetchStatusActions.markFetchDone());
      dispatch(itemActions.addInitialItems(items));
      dispatch(fetchStatusActions.markFetchingEnded());
    });

  return ()=>{
    controller.abort();
  }
  },[fetchStatus])


  return (
    <></>
  )
};


export default FetchItems;


