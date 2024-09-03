import notfound from '../assets/cute-sad-crying-hamburger-character_464314-655.jpg'
import s from '../style/NoPage.module.scss'


export const NoPage=()=>{
    return(
        <div className={s.pageStyle}>
        <h1>404 PAGE NOT FOUND</h1>
        <p>The page you are looking for doesn't exist.</p>
        <img src={notfound} alt="not found" />
        </div>
    )
}