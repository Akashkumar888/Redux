

import { useRef } from "react";
import { useDispatch } from "react-redux";

import {counterActions} from '../store/counter';
import {privacyActions} from '../store/privacy';

const Controls = () => {

  const dispatch=useDispatch();

  const inputElement=useRef();


  const handleIncrement=()=>{
  dispatch(counterActions.increment());
  };
  const handleDecrement=()=>{
  dispatch(counterActions.decrement());
  };
  const handleAdd=()=>{
  dispatch(counterActions.add({num: Number(inputElement.current.value)} ));
  inputElement.current.value="";
  };
  
  const handleSubtract=()=>{
  dispatch(counterActions.subtract({num: Number(inputElement.current.value)} ));
  inputElement.current.value="";
  };
  
  const handleClear=()=>{
    dispatch(counterActions.clear());
  };
  
  const handlePrivacyToggle=()=>{
  dispatch(privacyActions.privacyToggle());
  };


  return (
    <>
    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button type="button" className="btn btn-primary" onClick={handleIncrement}>
          +1
        </button>
        <button type="button" className="btn btn-success" onClick={handleDecrement}>
          -1
        </button>
        <button type="button" className="btn btn-warning" onClick={handlePrivacyToggle}>Privacy Toggle</button>
      </div>

      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center control-row">
        <input type="text" placeholder="Enter number" className="number-input" ref={inputElement} />
        
        <button  type="button" className="btn btn-info" onClick={handleAdd }>Add</button>

        <button  type="button" className="btn btn-danger" onClick={handleSubtract}>Subtract</button>  
        <button  type="button" className="btn btn-secondary" onClick={handleClear}>Clear</button> 
      </div>
    </>

      
  );
};

export default Controls;

