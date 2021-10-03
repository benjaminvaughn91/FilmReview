import React, { useState, useEffect } from 'react'
import ReviewBox from '../reviewBox/ReviewBox'
import reviewService from '../../services/reviews'
import DisplayBorder from '../displayBorder/DisplayBorder'

const ReviewBoxDisplay = (props) => {
    const {name} = props;

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

    if (reviews.length > 0) {
    return (
    <div>
    <div className="md:w-2/3 mx-auto flex flex-wrap pt-4 pb-4 pb-1 justify-center">
        <DisplayBorder name={name}/>
        <div>
            <div className="flex flex-nowrap w-full gap-x-2 pb-5">
                <ReviewBox review={reviews[0]} />
                <ReviewBox review={reviews[1]} />
            </div>
            <div className="flex flex-nowrap w-full gap-x-2">
                <ReviewBox review={reviews[2]} />
                <ReviewBox review={reviews[3]} />
            </div>
        </div>
    </div>
    </div>
    )}
    else return null
}

export default ReviewBoxDisplay