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
            <a href='#Home' rel="noreferrer" onClick={()=>setActivNav('#Home')} className={activNav ==='#Home'? 'active' : ''}><AiFillHome/></a>
            <a href='#about' rel="noreferrer" onClick={()=>setActivNav('#about')} className={activNav ==='#about'? 'active' : ''}> <SiAboutdotme/></a>
            <a href='#experience' rel="noreferrer" onClick={()=>setActivNav('#experience')} className={activNav ==='#experience'? 'active' : ''}><FiBookOpen/></a>
            <a href='#services' rel="noreferrer" onClick={()=>setActivNav('#services')} className={activNav ==='#services'? 'active' : ''}><MdDesignServices/></a>
            <a href='#contact' rel="noreferrer" onClick={()=>setActivNav('#contact')} className={activNav ==='#contact'? 'active' : ''}><TiContacts/></a>
        </nav>
    )
}

export default Nav