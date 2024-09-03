import {Navbar} from "../components/Navbar"
import  {Outlet} from "react-router-dom"
import s from '../style/MainLayout.module.scss'
import {Footer} from '../components/Footer'


export const MainLayout =()=>{
    return(
        <>
        <Navbar/>
        <main className={s.mainStyle}>
         <Outlet/>
         <Footer />
        </main>
        </>
    )
}