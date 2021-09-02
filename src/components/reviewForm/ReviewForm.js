import React, { useState } from 'react'
import reviewService from '../../services/reviews'

const ReviewForm = (props) => {

    const [newAuthor, setNewAuthor] = useState('') 
    const [newContent, setNewContent] = useState('') 
    const [submitted, setSubmitted] = useState(false)

    const createReview = (event) => {
        event.preventDefault()

        const newReview = {
          author: newAuthor,
          content: newContent,
          movieId: props.movieId
        }
  
        reviewService.createReview(newReview).then(() => {
          setNewAuthor('')
          setNewContent('')
          setSubmitted(true)
        })   
    }

    const handleNewAuthorChange = (event) => {
        setNewAuthor(event.target.value)
    }

    const handleNewContentChange = (event) => {
      setNewContent(event.target.value)
    }
    
    if (!submitted) {
    return (
      <div>
        <div className="flex mx-auto bg-gray-800 px-5 lg:px-0 items-center justify-center shadow-lg mx-8 rounded-b-md">
        <form onSubmit={createReview}>
          <div className="mt-2">
          <h2 className="pt-3 pb-4 text-gray-100 text-center text-2xl"> Add a review for this movie </h2>
          <input className="font-medium rounded border border-gray-400 py-1 px-3 text-gray-500" 
              value={newAuthor} onChange={handleNewAuthorChange} placeholder="Your name"/>  
          <textarea className=" rounded border border-gray-400 leading-normal w-full h-52 py-1 px-3 mt-3 font-medium text-gray-500" 
              value={newContent} onChange={handleNewContentChange} placeholder="Type your review here"></textarea>      
          </div>   
          <button className="bg-white text-gray-700 font-medium py-1 px-4 mt-3 mb-5 mr-1 border border-gray-400 rounded-lg tracking-wide hover:bg-gray-100" 
              type="submit">Submit</button> 
        </form>
        </div>
      </div>
    )}
    else {
      return (
        <div className="">
          <div className="flex mx-auto bg-gray-800 items-center justify-center shadow-lg  mx-8 rounded-b-md">
            <div className="text-gray-100 text-2xl pt-8 pb-16"> Thanks for your contribution! </div>
          </div>
        </div>
      )}
  }

export default ReviewForm