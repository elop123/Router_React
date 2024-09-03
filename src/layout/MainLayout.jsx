import {Navbar} from "../components/Navbar"
import  {Outlet} from "react-router-dom"
import s from '../style/MainLayout.module.scss'

export const MainLayout =()=>{
    return(
        <>
        <Navbar/>
        <main className={s.mainStyle}>
         <Outlet/>
        </main>
        </>
    )
}