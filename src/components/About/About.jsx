import './About.css'
import mf from '../../Accets/mf.png'
import {FaAward} from 'react-icons/fa'
import {HiUsers} from 'react-icons/hi'
import {AiOutlineFundProjectionScreen} from 'react-icons/ai'
import {BsFillAwardFill} from 'react-icons/bs'

const About =()=>{
    return(
        <section id='about'>
            <h5>Давайте познакомимся!</h5>
            <h2>Обо мне</h2>

            <div className=' container about__container'>
                <div className="about__me">
                    <div className="aboutImg">
                        <img src={mf} alt="" />
                    </div>
                </div>
                <div className="about__content">
                    <div className="about__cards">
                        <article className='about__card'>
                            <FaAward className='About__icon'/>
                            <h5>
                                Опыт
                            </h5>
                            <small>
                                оконченные курсы <br />
                                стаж реальной работы <br />
                                более года
                            </small>

                        </article>
                        <article className='about__card'>
                            <HiUsers className='About__icon'/>
                            <h5>
                                клинты
                            </h5>
                            <small>
                                50+ благодарных клиентов
                            </small>

                        </article>
                        <article className='about__card'>
                            <AiOutlineFundProjectionScreen className='About__icon'/>
                            <h5>
                                навыки
                            </h5>
                            <small>
                                маникюр <br />
                                донаращивание <br />
                                дизайнерские решения
                            </small>

                        </article>
                        <article className='about__card'>
                            <BsFillAwardFill className='About__icon'/>
                            <h5>
                                гарантии
                            </h5>
                            <small>
                               в соответствии с ТК РФ
                            </small>

                        </article>
                    </div>

                </div>
            </div>
                <div className='about__text'>

                        <p>Добрый день! Меня зовут Екатерина Алымова, и я являюсь сертифицированным мастером маникюра с обширным опытом работы.
                             Я предлагаю широкий спектр услуг по уходу за ногтями и кожей рук, 
                            и всегда готова порадовать своих клиентов безупречным качеством своей работы.

Моя клиентская база на сегодняшний день включает людей из самых разных сфер жизни: от учеников и студентов до бизнесменов и политиков.
 Я горжусь тем, что мои услуги пользуются высоким спросом, и делаю все возможное, 
 чтобы удовлетворить потребности каждого клиента.

В моей работе я использую только лучшие косметические средства и инструменты, 
чтобы обеспечить максимальную степень безопасности и комфорта для каждого клиента. 
Я следую последним тенденциям мира моды и бьюти-индустрии, и всегда готова поделиться 
с клиентами своими советами и рекомендациями.</p>

                    <a href="#contact" className='btn btn-primary'>мои контакты</a>
                </div>

        </section>
    )
}

export default About