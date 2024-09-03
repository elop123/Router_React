
import {Home} from './pages/Home'
import {About} from './pages/About'
import {Blogs} from './pages/Blogs'
import {MainLayout} from './layout/MainLayout'
import {BrowserRouter, Routes, Route} from "react-router-dom"



function App() {
  

  return (
    <>
    <BrowserRouter>
     <Routes>
      <Route path={"/"} element={<MainLayout />}>
      <Route index element={<Home />}/>
       <Route path={"/about"} element={<About />}/>
       <Route path={"/blogs"} element={<Blogs />}/>
      <Route path={"/*"} element={<div>404...page not found</div>}/>
      </Route>
     </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
