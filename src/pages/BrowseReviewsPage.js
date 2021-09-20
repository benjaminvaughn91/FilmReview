import React, { useState, useEffect } from 'react'
import reviewService from '../services/reviews'
import ReviewBox from '../components/reviewBox/ReviewBox'

const BrowseReviewsPage = (props) => {
    const {goToReview} = props;

    const [reviews, setReviews] = useState([])
    
    useEffect(() => {
        let isMounted = true
        reviewService.getReviews().then(reviews => {
            if (isMounted) {
                setReviews(reviews.sort((a,b) => {
                    return new Date(b.date) - new Date(a.date);
                }))
            }
        })
        return () => { isMounted = false }
    }, [])

    return (
    <div className="bg-gradient-to-r from-gray-400 via-red-400 to-gray-400 text-xl text-white">
        <p className="text-center uppercase tracking-wide font-bold text-gray-100 text-4xl py-16"> Recent Reviews </p>
        <div className="w-full mx-auto">
            
            {reviews.map((review) => 
            <div>
                <div className="flex flex-nowrap justify-center gap-x-2 pb-5">
                    <ReviewBox id={review.id} movieId={review.movieId} goToReview={goToReview}/>
                </div>
            </div>
            )}
        </div>
    </div>
)}

export default BrowseReviewsPage