import s from '../style/Footer.module.scss'

export const Footer=()=>{
    return(
        <>
        <footer className={s.footerStyle}>
            <div >
            <li>Menu</li>
            <li>Restaurants</li>
            <li>Offers</li>
            </div>
            <div>
            <li>Jobs</li>
            <li>Delivery</li>
            <li>About us</li>
            </div>
            <div>
                <img src="" alt="facebook" />
                <img src="" alt="instagram" />
                <img src="" alt="tik-tok" />
            </div>
            
        </footer>
        </>
    )
}