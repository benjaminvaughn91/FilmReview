import React from 'react'
import border from '../../static/img/line_border.png'

const DisplayBorder = (props) => {
    return (
    <div>
        <nav className="w-full top-0 ml-1 px-1 md:px-6 md:py-1">
        <div className="w-full container mx-auto flex flex-wrap justify-between items-center mt-0  py-3"> 
            <p className="uppercase  tracking-wide font-bold text-gray-100 text-xl">{props.name} </p>

            <img className="hidden 2xl:block lg:mx-16 " src={border} alt="Line border"></img>

            <img className="md:hidden xl:block 2xl:hidden xl:px-6 " src={border} alt="Line border"></img>
        </div>
    </nav>
    </div>
)}

export default DisplayBorder
