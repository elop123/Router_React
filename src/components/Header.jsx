import burger from '../assets/header-logo.svg'
import s from '../style/Header.module.scss'

export const Header=()=>{
    return(
        <>
         <header className={s.content}>
            <div className={s.imageStyle}>
            <h2>TRY  the Limited Edition Whopper</h2>
            <img src={burger} alt="burger" />
            <button>Buy It Now!</button>
            </div>
           <div className={s.textStyle}> 
           <h3>What is better then a Whopper???</h3>
           {/* <p>More variants: Spicy, BBQ or Yankee with burger souce</p> */}
           </div>
         </header>
        </>
    )
}