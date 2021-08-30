import React from 'react'
import logo from '../../static/img/tmdb.svg'

const Footer = () => {
    return (
    <div>
        <div className="bg-brdr-pattern h-4"></div>
        <div className="bg-black text-white p-8 text-center">
            <p className="mx-auto pb-4">Created by Benjamin Vaughn</p>
            <p className="mx-auto pb-2">This product uses the TMDb API but is not endorsed or certified by TMDb.</p>
            <img className="mx-auto pb-4" src={logo} alt="TMDB logo" style={{width: 400}}></img>
        </div>
    </div>
)}

export default Footer