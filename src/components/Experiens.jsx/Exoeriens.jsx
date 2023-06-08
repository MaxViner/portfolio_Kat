import './Experiens.css'
import {BsPatchCheckFill} from 'react-icons/bs'
const Experiens =()=>{
    return(
        <section id='experience'>
          
           <h2>Почему стоит выбрать меня</h2>

           <div className='container experience__container'>
            <div className="experience__frontend">
                <h3>Мои преимущества</h3>
                <div className="experience__content">
                    <article className='experience__details'>
                    <BsPatchCheckFill className='experience__details-icon'/>
                    <div className='experience__details-text'>

                    <h4>Качество</h4>
                    <small className='text-light'>Обладаю знаниями <br /> профессионаьного уровня</small>
                    </div>
                </article>
                <article className='experience__details'>
                    <BsPatchCheckFill className='experience__details-icon'/>
                     <div className='experience__details-text'>

                    <h4>Цена</h4>
                    <small className='text-light'>Ниже чем средняя в сегменте</small>
                    </div>
                </article>
                <article className='experience__details'>
                    <BsPatchCheckFill className='experience__details-icon'/>
                    <div className='experience__details-text'>

                    <h4>Забота</h4>
                    <small className='text-light'>клиент превыше всего</small>
                    </div>
                </article>
                <article className='experience__details'>
                    <BsPatchCheckFill className='experience__details-icon'/>
                    <div className='experience__details-text'>

                    <h4>бонусы</h4>
                    <small className='text-light'>постоянным клиентам</small>
                    </div>
              </article>

                </div>
            </div>

            </div>


           
        </section >
    )
}

export default Experiens