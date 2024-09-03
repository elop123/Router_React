 import {NavLink} from 'react-router-dom'
 import s from '../style/Navbar.module.scss'
 import img from '../assets/header-logo.svg'


 export const Navbar =()=>{
  return (
    <>
    <nav className={s.navbarStyle}>
        <ul>
        <NavLink to ={"/"}><img src={img} alt="logo" /></NavLink>
       
            <li>
                <NavLink style={({isActive})=>
                isActive? {color :"red"}: {color:"black"}} 
                to ={"/"}>
                    Menu</NavLink>
            </li>
            <li><NavLink to ={"/restaurants"}>Restaurants</NavLink>
            </li>
            <li><NavLink to ={"/offers"}>Offers</NavLink>
            </li>
            <li><NavLink to ={"/jobs"}>Jobs</NavLink>
            </li>
            <li><NavLink to ={"/about"}>About us</NavLink>
            </li>
            
            
        </ul>
    </nav>
    </>
  )
 }