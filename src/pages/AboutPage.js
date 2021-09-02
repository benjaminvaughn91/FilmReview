import React from 'react'

const AboutPage = () => {
    return (
    <div>
    <div className="bg-gradient-to-r from-gray-400 via-red-400 to-gray-400 text-xl text-white">
        <div className="py-7">
        <div className="grid grid-cols-5 rounded-md text-center md:text-left w-11/12 md:w-2/3 mx-auto py-9 px-9 bg-gray-800">
            <div className="rounded-md col-start-1 col-end-6 row-start-3 row-end-6"> 
            <p className="mx-auto pb-4 text-left my-20">Welcome to Film Review, a place for browsing movies and posting reviews about them. This site was made with React, NodeJS, Express and a MongoDb database. It's mostly for show and to let me experiment with React. Movie lists and information are fetched from 
                The Movie Database (TMDB) API and reviews are stored in my MongoDb database. </p>           
            </div>
        </div> 
        </div>
    </div>
    </div>
)}

export default AboutPage
