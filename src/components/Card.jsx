import s from '../style/Card.module.scss'
import img1 from '../assets/kingse52000307-06_burger_king_bøfsandwich_xl_digitalpictures_acrelec_kiosk_singel_header_400x400.png'

export const Card=()=>{
    return(
        <div className={s.wrapper}>
        <section className={s.cardStyle}>
        <img src={img1} alt="burger" />
        <h3>Beaf Sandwich</h3>
        <p>Try the new steak sandwich XL! Extra large and with more of all the goodness 
        you love: juicy flame-grilled prime beef, creamy remoulade, crispy onions, pickles,
         ketchup and mustard.</p>
        </section>
        <section className={s.cardStyle}>
        <img src={img1} alt="burger" />
        <h3>Beaf Sandwich</h3>
        <p>Try the new steak sandwich XL! Extra large and with more of all the goodness 
        you love: juicy flame-grilled prime beef, creamy remoulade, crispy onions, pickles,
         ketchup and mustard.</p>
        </section>
        <section className={s.cardStyle}>
        <img src={img1} alt="burger" />
        <h3>Beaf Sandwich</h3>
        <p>Try the new steak sandwich XL! Extra large and with more of all the goodness 
        you love: juicy flame-grilled prime beef, creamy remoulade, crispy onions, pickles,
         ketchup and mustard.</p>
        </section>
        </div>
    )
}

export default Card

