import {Menu} from './pages/Menu'
import {Home} from './pages/Home'
import {About} from './pages/About'
import {Restaurants} from './pages/Restaurants'
import { Offers } from './pages/Offers'
import {MainLayout} from './layout/MainLayout'
import { NoPage } from './pages/NoPage'
import {BrowserRouter, Routes, Route} from "react-router-dom"



function App() {
  

  return (
    <>
    <BrowserRouter>
     <Routes>
      <Route path={"/"} element={<MainLayout />}>
       <Route index element={<Home />}/>
       <Route path={"/menu"} element={<Menu />}/>
       <Route path={"/restaurants"} element={<Restaurants />}/>
       <Route path={"/offers"} element={<Offers />}/>
       <Route path={"/about"} element={<About />}/>
       <Route path={"/*"} element={<NoPage />}/>
      </Route>
     </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
