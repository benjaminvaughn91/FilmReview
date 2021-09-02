import React from 'react'
import { Link } from "react-router-dom"

const Nav = () => {
  
    return (
      <div className="pb-3 md:pt-8 pr-8 ">
        <div className="pl-6 text-gray-100 text-xl font-semibold space-x-3 tracking-wide">
          <Link className="lg:pr-5 px-4 md:px-2 lg:px-5 hover:text-gray-300" to="/">Home</Link>
          <Link className="lg:pr-5 px-4 md:px-2 lg:px-5 hover:text-gray-300" to="/browse/reviews">Browse</Link>
          <Link className="lg:pr-5 px-4 md:px-2 lg:px-5 hover:text-gray-300" to="/about">About</Link>
        </div>
      </div>
    )
  }

export default Nav