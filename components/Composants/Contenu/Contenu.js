import React, {useContext} from 'react'
import {Context} from '../../context/langContext'
import './Contenu.css'
import data from '../../assets/data.js'
import P2 from '../../assets/photos/p2.png'


export default function Contenu() {

    const {lang} = useContext(Context)

  

    return (
        <div className='content'>
            <div>
                <img src={P2} alt="" id='p2'/>
            </div>
            <h1 className="title">{data[lang].title}</h1>
            <p className="txt">{data[lang].txt}</p>
            <a href=""className='button btn btn-outline-primary py-3 px-4'>LinkedIn</a>
        </div>
    )
}
