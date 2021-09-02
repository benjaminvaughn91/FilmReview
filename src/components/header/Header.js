import React from 'react'
import logo from '../../static/img/filmreview_logo.png'
import Nav from '../../components/nav/Nav'
import { Link } from "react-router-dom"

const Header = (props) => {
    return (
        
    <div>
        <div className="bg-black p-1 flex flex-wrap justify-center md:justify-evenly lg:justify-between">
            <div className="w-96 py-5 ml-2 sm:ml-6 md:ml-22 ">
                <Link to="/"><img src={logo} alt="Main logo"></img></Link>
            </div>
            <Nav/>
        </div>
        <div className="bg-brdr-pattern h-4"></div>
    </div>
)}

export default Header

