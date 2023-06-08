import './Folio.css'
import IMG1 from "../../Accets/IMG1.jpg"
import IMG2 from "../../Accets/IMG2.jpg"
import IMG3 from "../../Accets/IMG3.jpg"
import IMG4 from "../../Accets/IMG4.jpg"
import IMG5 from "../../Accets/IMG5.jpg"



const data = [
    {"id": 1, "image": IMG1, "title": "Маникюр без покрытия", "price": "300 P"},
    {"id": 2, "image": IMG2, "title": "Покрытие лаком", "price": "500 P"},
    {"id": 3, "image": IMG3, "title": "Френч", "price": "100 P"},
    {"id": 4, "image": IMG4, "title": "Донаращивание", "price": "100 P"},
    {"id": 5, "image": IMG5, "title": "снятие чужой работы", "price": "20 P один ноготь"},

]


const Folio =()=>{
    return(
        <section id='folio'>
            
            <h2>Прайс лист</h2>

            <div className="container portfolio__container">
                {
                    data.map(({id,image,title,price})=>{
                        return (
                            <article key={id} className='portfolio__item'>
                            <div className="portfoloi__item-img">
                                <img src={image} alt={title} />
                            </div>
                            <h3>{title}</h3>
                            <div className="portfolio__item-cta">
        
                            <p>{price}</p>
                            </div>
                        </article>
                        )
                    })
                }
                

            </div>

        </section>
    )
}

export default Folio