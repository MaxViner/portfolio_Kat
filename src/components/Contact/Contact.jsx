
import './Contact.css'
import {MdOutlineAlternateEmail} from 'react-icons/md'
import {SiMinutemailer} from 'react-icons/si'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react'

import emailjs from 'emailjs-com';

const Contact =()=>{
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_1mn4vkg', 'template_rhqye4w', form.current, 'EHwCagiy_RrK-Ahc9')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };

    return(
        <section id='contact' >
            <h5>В одно касание!</h5>
            <h2>Мои контакты</h2>

            <div className="contact__container">
                <div className="contact__options">
                    <article className='contact__option'>
                        <MdOutlineAlternateEmail className='contact__option-icon'/>
                        <h4>Email</h4>
                        <h5>Алымова</h5>
                        <a href="mailto:Anpilogova469@gmail.com"target='_blank'>Send a message</a>
                    </article>

                    <article className='contact__option'>
                        <SiMinutemailer className='contact__option-icon'/>
                        <h4>Messager</h4>
                        <h5>Алымова</h5>
                        <a href="https://t.me/Katerina_Alymova">Send a message</a>
                    </article>

                    <article className='contact__option'>
                        <BsWhatsapp className='contact__option-icon'/>
                        <h4>WhatsApp</h4>
                        <h5>Алымова</h5>
                        <a href="https://api.whatsapp.com/send?phone=89102112658">Send a message</a>
                    </article>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name ' placeholder='Your Full Name' required/>
                    <input type="email"  name='email' placeholder='Your Email' required/>
                    <textarea name="message" id="" cols="30" rows="7" placeholder='Your message' required></textarea>
                    <button type='submit' className='btn btn-primary'>Send Message</button>
                </form>
            </div>
        </section >
    )
}

export default Contact