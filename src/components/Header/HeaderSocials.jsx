import './HeaderSocials.css'
import {MdOutlineAlternateEmail} from 'react-icons/md'
import {SiMinutemailer} from 'react-icons/si'
import {BsWhatsapp} from 'react-icons/bs'

const HeaderSocials =()=>{
    return(
        <div className='header__socials'>
            <a href="mailto:Anpilogova469@gmail.com" target='_blank'>  <MdOutlineAlternateEmail className='ikon'/></a>
            <a href="https://t.me/Katerina_Alymova"><SiMinutemailer className='ikon'/></a>
            <a href="https://api.whatsapp.com/send?phone=89102112658"> <BsWhatsapp className='ikon'/></a>

        </div>
    )
}

export default HeaderSocials