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
    <div className="md:w-2/3 mx-auto">
        <DisplayBorder name={name}/>
        <div className="grid grid-cols-2 grid-rows-2 items-center gap-x-2.5 gap-y-2.5">
            
                <div className="col-start-1 col-end-2 row-start-1 row-end-2">
                    <ReviewBox review={reviews[0]} />
                </div> 
                <div className="col-start-2 col-end-3 row-start-1 row-end-2">
                    <ReviewBox review={reviews[1]} />
                </div> 
                <div className="col-start-1 col-end-2 row-start-2 row-end-3">
                    <ReviewBox review={reviews[2]} />
                </div> 
                <div className="col-start-2 col-end-3 row-start-2 row-end-3">
                    <ReviewBox review={reviews[3]} />
                </div> 
            
        </div>
    </div>
    )}
    else return null
}

export default ReviewBoxDisplay