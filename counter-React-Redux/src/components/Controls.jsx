

import { useRef } from "react";
import { useDispatch } from "react-redux";


const Controls = () => {

  const dispatch=useDispatch();
  const inputElement=useRef();


  const handleIncrement=()=>{
  dispatch({type:'INCREMENT'});
  };
  const handleDecrement=()=>{
  dispatch({type:'DECREMENT'});
  };
  const handleAdd=()=>{
  dispatch({type:'ADD',
    payload:{
    num:Number(inputElement.current.value),
  }});
  inputElement.current.value="";
  };
  
  const handleSubtract=()=>{
  dispatch({type:'SUBTRACT',
  payload:{
    num:Number(inputElement.current.value),
  }});
  inputElement.current.value="";
  };
  
  const handlePrivacyToggle=()=>{
  dispatch({
    type:'PRIVACY_TOGGLE',
  });
  };
   const handleClear=()=>{
    dispatch({
    type:'CLEAR',
  });
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

