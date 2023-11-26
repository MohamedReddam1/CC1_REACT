import React, { useState } from 'react'
import './calc.css'

export default function Calc() {

const [exp,setExp]=useState('');


const clear=()=>{

 setExp('');
}

const result=()=>{
  try {
  let v=exp;
    setExp(eval(v));
    
   }
  catch(error){
    setExp('expression non valide')
  }
}
const tapecar=(e)=>{


let oldval=exp;
let newval=oldval+e.target.value;
setExp(newval);
}

  return (
    <div id='PrimaryDiv' className='text-center mt-5'>

      <h1 id='title' className='m-5'>TP1_REACT</h1>

      <center>
      <div id='CalcBody' className='m-5 align-middle p-5'>
        <div className=''>
          <input value={exp} type="text" id='input' className=''/>

          <div>
            <input onClick={clear} type="button" value="C" id='clear'/>
            <input onClick={(e)=>tapecar(e)} type="button" value="/" className='LesCalc'/>
          </div>

          <div>
            <input onClick={(e)=>tapecar(e)} type="button" value="7" className='num'/>
            <input onClick={(e)=>tapecar(e)} type="button" value="8" className='num'/>
            <input onClick={(e)=>tapecar(e)} type="button" value="9" className='num'/>
            <input onClick={(e)=>tapecar(e)} type="button" value="*" className='LesCalc'/>
          </div>

          <div>
            <input onClick={(e)=>tapecar(e)} type="button" value="4" className='num'/>
            <input onClick={(e)=>tapecar(e)} type="button" value="5" className='num'/>
            <input onClick={(e)=>tapecar(e)} type="button" value="6" className='num'/>
            <input onClick={(e)=>tapecar(e)} type="button" value="-" className='LesCalc'/>

          </div>

          <div>
            <input onClick={(e)=>tapecar(e)} type="button" value="1" className='num'/>
            <input onClick={(e)=>tapecar(e)} type="button" value="2" className='num'/>
            <input onClick={(e)=>tapecar(e)} type="button" value="3" className='num'/>
            <input onClick={(e)=>tapecar(e)} type="button" value="+" className='LesCalc'/>
          </div>

          <div>
            <input onClick={(e)=>tapecar(e)} type="button" value="0" id='zero'/>
            <input onClick={(e)=>tapecar(e)} type="button" value="." className='num'/>
            <input onClick={result} type="button" value="=" className='LesCalc'/>
          </div>
        </div>
        
      </div>
      </center>
           
    </div>
  )
}
