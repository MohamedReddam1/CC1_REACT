import React, { useState } from 'react'
import { Image } from './Image_data'
import "./tp2.css"



export default function Tp2_react() {



    const [data,setdata]=useState(Image)
    const [counts,setcount]=useState(0)

    const add=()=>{
        if (counts<data.length-1) {
            setcount(counts+ +1)
        }
    }
    
    const sup=()=>{
        if (counts>0) {
            setcount(counts-1)
        }
    }
  return (
    <div className='d-flex justify-content-center pt-4'>
        <div className='card w-75 h-100 text-center border border-0'>
            <div className='card-title'>
                <h1 className='text-dark'>TP2_REACT</h1>
                <center><h3 id='count' className='text-dark'>{counts}</h3></center>
            </div>
            <div className=''>
                <div className='container'>
                    <div className='row'>
                        <input type="button" className='btn btn-dark py-5 col-lg-1 col-md-1 col-sm-1 col-1' onClick={add} value="<" />
                        <img src={data[counts].img} className='col-lg-10 col-md-10 col-sm-10 col-10' id='image' alt="" />
                        <input type="button" className='btn btn-dark py-5 col-lg-1 col-md-1 col-sm-1 col-1' onClick={sup} value=">" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
