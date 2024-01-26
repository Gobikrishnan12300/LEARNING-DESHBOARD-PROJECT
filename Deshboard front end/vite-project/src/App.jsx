
import React from 'react'
import Navbar from'./pages/Navbar'
// import Coursedetails from './components/COURSE DETAILS'
// import Contact from './components/Contact'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import Coursedetails from './components/COURSE DETAILS'
import Contact from './components/Contact'
import Aboutus from './components/About us'
import Login from './pages/Login'
import Signin from './components/Signin'
import DataTable from './pages/Datatable'



const App = () => {
  return (
    <div>
      <Navbar/>
      <BrowserRouter>
      <Routes>
        <Route path='/HOME' element={<Home />} />
        <Route path='/COURSE DETAILS' element={<Coursedetails />} />
        <Route path='/CONTACT' element={<Contact/>} />
        <Route path='/About us' element={<Aboutus/>} />
        <Route path='/Login' element={<Login/>} />
        <Route path='/signin' element={<Signin/>} />
        <Route path='/Datatable' element={<DataTable/>} />
        
      </Routes>

      </BrowserRouter>
    
      
    
      

      
      
    


</div>




  )
}

export default App