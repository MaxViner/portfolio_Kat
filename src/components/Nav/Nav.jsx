import './Nav.css'
import {AiFillHome} from 'react-icons/ai'
import {SiAboutdotme } from 'react-icons/si'
import {TiContacts } from 'react-icons/ti'
import {FiBookOpen } from 'react-icons/fi'
import {MdDesignServices } from 'react-icons/md'
import { useState } from 'react'
const Nav =()=>{
    const [activNav,setActivNav]=useState('#')
    return(
        <nav>
            <a href='#' onClick={()=>setActivNav('#')} className={activNav ==='#'? 'active' : ''}><AiFillHome/></a>
            <a href='#about' onClick={()=>setActivNav('#about')} className={activNav ==='#about'? 'active' : ''}> <SiAboutdotme/></a>
            <a href='#experience' onClick={()=>setActivNav('#experience')} className={activNav ==='#experience'? 'active' : ''}><FiBookOpen/></a>
            <a href='#services' onClick={()=>setActivNav('#services')} className={activNav ==='#services'? 'active' : ''}><MdDesignServices/></a>
            <a href='#contact' onClick={()=>setActivNav('#contact')} className={activNav ==='#contact'? 'active' : ''}><TiContacts/></a>
        </nav>
    )
}

export default Nav