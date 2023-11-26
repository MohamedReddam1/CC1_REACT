import React, {useContext} from 'react'
import {Context} from '../../context/langContext'
import './Contenu.css'
import data from '../../assets/data.js'
import P2 from '../../assets/photos/p2.png'
import ToggleLangs from '../ToggleLangs/ToggleLangs.js'
import ContextProvider from '../../context/langContext'


export default function Contenu() {

    const {lang} = useContext(Context)
    
  

    return (
        <div className='content'>
            <div className='container'>
                <div className='row d-flex justify-content-between'>
                    <div className='col-6 ppp'>
                        <h1 className="titre">{data[lang].title}</h1>
                        <p className="txt">{data[lang].txt}</p>
                        <a href=""className='button btn btn-outline-primary py-3 px-4'>LinkedIn</a>
                    </div>
                    <img src={P2} alt="" id='p2' className='col-6'/>
                </div>
            </div>
        </div>
    )
}
