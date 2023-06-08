import CV from '../../Accets/CTA.jpg'

const CTA =()=>{
    return(
        <div className="cta">
             <a href={CV} download className="btn"> скачать CV</a>
      
            <a href="#contact" rel="noreferrer" className="btn-primary">
                мои контакты
            </a>
        </div>
    )
}

export default CTA