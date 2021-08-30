import React from 'react'
import { Link } from "react-router-dom"

const Nav = () => {
    const padding = {paddingRight: 5}
    
    return (
      <div className=" text-gray-100 text-xl font-semibold space-x-3 tracking-wide ">
        <Link className="px-4 hover:text-gray-300" style={padding} to="/">home</Link>
        <Link className="px-4 hover:text-gray-300" style={padding} to="/detail/:id">detail</Link>
        <Link className="px-4 hover:text-gray-300" style={padding} to="/detail/:id">fake</Link>
        <Link className="px-4 hover:text-gray-300"style={padding} to="/detail/:id">notreal</Link>
      </div>
    )
  }

export default Nav