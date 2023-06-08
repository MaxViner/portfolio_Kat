import './Header.css'
import CTA from './CTA'
import mf from '../../Accets/mf.png'
import HeaderSocials from './HeaderSocials'

const Header =()=>{
    return(
        <div>
            <header id='Home'>
                <div className="contaner header__container">
                    <div className="me">
                        <img src={mf} alt="" />
                    </div>
                    <h5>Привет!</h5>
                    <h1>Я Екатерина Алымова</h1>
                    <h5 className='text-light'>Сертифицированный мастер маникюра</h5>
                    <CTA/>
                    <HeaderSocials/>

                    <a href="#contact" className="scroll__down">Scrol Down</a>
                </div>
            </header>
        </div>
    )
}

export default Header