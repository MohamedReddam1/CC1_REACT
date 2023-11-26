import React, {useContext} from 'react'
import FrenchFlag from '../../assets/photos/france.svg'
import SpanishFlag from '../../assets/photos/spain.svg'
import EnglishFlag from '../../assets/photos/united-kingdom.svg'
import SaudiFlag from '../../assets/photos/saudiarabia.png'
import './ToggleLangs.css'
import {Context} from '../../context/langContext'

export default function ToggleLangs() {

    const {setLang} = useContext(Context)
 
    return (
        <div className='container-langs'>
            
            <img onClick={() => setLang('FR')} src={FrenchFlag} />
            <img onClick={() => setLang('EN')} src={EnglishFlag} />
            <img onClick={() => setLang('ES')} src={SpanishFlag} />
            <img onClick={() => setLang('AR')} src={SaudiFlag} />

        </div>
    )
}
