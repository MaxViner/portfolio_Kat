

import './Tesstimonials.css'
import {  Pagination } from 'swiper';
import john from "../../Accets/john.jpg"
import t2 from "../../Accets/t2.jpg"
import t3 from "../../Accets/t3.jpg"
import t4 from "../../Accets/t4.jpg"

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



const data = [
    {"id": 2, "avatar": t2, "name": "Alice", "review": "Результаты всегда высокого качества, каждая деталь продумывается и выполняется с большой тщательностью."},
    {"id": 3, "avatar": t3, "name": "Kally", "review": "Я ощущаю себя очень уютно и комфортно, когда нахожусь в вашем салоне. Вы уделяете внимание каждому клиенту, создаете приятную атмосферу и стараетесь сделать все возможное для того, чтобы каждый посещение было исключительным."},
    {"id": 4, "avatar": t4, "name": "Kate", "review": "Я очень ценю вашу отзывчивость и индивидуальный подход. Вы всегда готовы выслушать меня, принять мои пожелания и рекомендации, чтобы убедиться, что я доволен результатом. Я очень благодарен за то, что вы идете на встречу и сделали все возможное, чтобы удовлетворить мои потребности."}
    ,{"id": 1, "avatar": john, "name": "Staysy", "review": "Я хотел бы выразить огромную благодарность разработчику этого веб-сайта за профессиональную и быструю работу. Веб-сайт, который онсоздал, обладает превосходным дизайном и легкостью использования, что позволяет мне быстро находить необходимую информацию и проводить свои дела. Я бы рекомендовал этого разработчика всем, кто ищет качественную работу в области веб-разработки.    "},
  ]


const Tesstimonials =()=>{
    return(
        <section id='testimonials'> 
           <h5>Отзывы</h5>
           <h2>Моих клиентов</h2>
           <Swiper className="container testimonial__container"
           modules={[Pagination]}
           spaceBetween={40}
           slidesPerView={1}
           
           pagination={{ clickable: true }}
          
           >
         {
            data.map(({avatar,name,review,id})=>{
                return(

                <SwiperSlide key={id} className="testimonial">
                <div className="client__avatar">
                    <img src={avatar} alt="" />
                    
                </div>
                <h5 className='client__name'>{name}</h5>
                    <small className='client__review'>{review}</small>
            </SwiperSlide>
                )
            })
         }
           </Swiper>

        </section>
    )
}

export default Tesstimonials