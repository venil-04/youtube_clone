import { useState } from 'react'
import './App.css'
import Header from './component/Header'
import Sidebar from './component/Sidebar'
import RecommendetVideo from './component/RecommendetVideo'

function App() {
  

  return (
    <>
    
      <Header/>

      <div className="app_page flex">

        <div className="sidebar flex-[0.2] border-2 border-gray-300">
        <Sidebar />
        </div>
        
        <div className="recomanded flex-[0.8] border-2 border-black">
        <RecommendetVideo />
        </div>
        
      </div>
     
    </>
  )
}

export default App
