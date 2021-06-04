import React, { useState } from "react";
function App() {
  const [num,setNum]=useState(0);
  const IncNum=()=>{
    setNum(num+1);
  }
  const DecNum=()=>{
    setNum((oldNum)=>{
      return((oldNum===0?alert("Num is 0"):setNum(num-1)));
    });
    setNum(num);
  }
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <h1> {num} </h1>
          <div className="btn_div">
          <button className="incr_btn" onClick={IncNum}> Incr </button> <button className = "decr_btn" onClick={DecNum}> Decr </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
