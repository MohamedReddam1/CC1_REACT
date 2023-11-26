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
        <div className='card w-75 h-100 text-center'>
            <div className='card-title'>
                <h1 className='title text-dark'>TP2_REACT</h1>
                <center><h3 id='count' className='text-dark'>{counts}</h3></center>
            </div>
            <div className='card-body d-flex justify-content-between'>
                <div className='container'>
                    <div className='row'>
                        <input type="button" className='button   btn btn-dark bg-danger btn-lg w-50  col-lg-1 col-md-2 col-sm-2 col-xs-2' onClick={add} value="<" />
                        <img src={data[counts].img} className='w-75 h-100 col-lg-10 col-md-8 col-sm-8 col-xs-8' id='image' alt="" />
                        <input type="button" className='button   btn btn-dark bg-danger btn-lg w-50  col-lg-1 col-md-2 col-sm-2 col-xs-2' onClick={sup} value=">" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
