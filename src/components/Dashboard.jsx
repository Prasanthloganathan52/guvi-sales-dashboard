import React from 'react'
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Infotable from './Infotable';

function Dashboard() {
  return (
    <div className='container'>
     <Navbar/>
    <Sidebar/>
    <Infotable/>
    

    </div>
      
   
  )
}

export default Dashboard
