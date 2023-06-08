import './Footer.css'
import {MdOutlineAlternateEmail} from 'react-icons/md'
import {SiMinutemailer} from 'react-icons/si'
import {BsWhatsapp} from 'react-icons/bs'



const Footer =()=>{
    return(
        <footer>
            <a href="#Home" className='footer__logo'>Наверх</a>
            <ul className='permalinks'>
                <li><a href="#Home">Главная</a></li>
                <li><a href="#about">Обо мне</a></li>
                <li><a href="#experience">Преимущества</a></li>
                <li><a href="#services">услуги</a></li>
                <li><a href="#folio">прайс</a></li>
                <li><a href="#testimonials">отзывы</a></li>
                <li><a href="#contact">контакты</a></li>
            </ul>

            <div className="footer__socials">
         
            <a href="mailto:Anpilogova469@gmail.com" target='_blank' rel="noreferrer">  <MdOutlineAlternateEmail className=''/></a>

            <a href="https://t.me/Katerina_Alymova"><SiMinutemailer className=''/></a>
            <a href="https://api.whatsapp.com/send?phone=89102112658"> <BsWhatsapp className=''/></a>

            </div>

            <div className="footer__copyright">
                <small>&copy; MaxViner 2023</small>
            </div>
        </footer>
    )
}

export default Footer