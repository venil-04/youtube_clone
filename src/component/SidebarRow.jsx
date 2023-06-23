import React from 'react'
import '../App.css'
function SidebarRow({Icon,title}) {
  return (
    <div>
      <div className="Sidebarrow flex  text-sm p-3 items-center font-semibold text-slate-800 hover:bg-slate-200 cursor-pointer ">
        <div className="icon  "><Icon/></div>
        <div className="title mt-0 mx-5">{title}</div>
      </div>
    </div>
  )
}

export default SidebarRow
