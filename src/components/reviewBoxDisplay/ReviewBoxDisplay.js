import React, { useState, useEffect } from 'react'
import ReviewBox from '../reviewBox/ReviewBox'
import reviewService from '../../services/reviews'
import DisplayBorder from '../displayBorder/DisplayBorder'

const ReviewBoxDisplay = (props) => {
    const {name, goToReview} = props;

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
    <div>
    <div className="md:w-2/3 mx-auto flex flex-wrap pt-4 pb-4 pb-1 justify-center">
        <DisplayBorder name={name}/>

        {reviews.length &&
        <div>
            <div className="flex flex-nowrap w-full gap-x-2 pb-5">
                <ReviewBox id={reviews[0].id} movieId={reviews[0].movieId} goToReview={goToReview}/>
                <ReviewBox id={reviews[1].id} movieId={reviews[1].movieId} goToReview={goToReview}/>
            </div>
            <div className="flex flex-nowrap w-full gap-x-2">
                <ReviewBox id={reviews[2].id} movieId={reviews[2].movieId} goToReview={goToReview}/>
                <ReviewBox id={reviews[3].id} movieId={reviews[3].movieId} goToReview={goToReview}/>
            </div>
        </div>
        }
    </div>
</div>
)}

export default ReviewBoxDisplay