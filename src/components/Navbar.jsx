 import {NavLink} from 'react-router-dom'
 import s from '../style/Navbar.module.scss'


 export const Navbar =()=>{
  return (
    <>
    <nav className={s.navbarStyle}>
        <ul>
            <li>
                <NavLink style={({isActive})=>
                isActive? {color :"red"}: {color:"black"}} 
                to ={"/"}>
                    Home</NavLink>
            </li>
            <li><NavLink to ={"/about"}>About</NavLink>
            </li>
            <li><NavLink to ={"/blogs"}>Blogs</NavLink>
            </li>
        </ul>
    </nav>
    </>
  )
 }