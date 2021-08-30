import React, { useState, useEffect } from 'react'
import ReviewBox from '../reviewBox/ReviewBox'
import reviewService from '../../services/reviews'
import border from '../../static/img/line_border.png'

const ReviewBoxDisplay = (props) => {

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
    <section className="bg-gradient-to-r from-gray-400 via-red-400 to-gray-400 text-white">

    <div className="container  md:w-2/3 md:mx-auto flex items-center flex-wrap  pt-4 pb-1">

        <nav className="w-full top-0 ml-1 px-1 md:px-6 md:py-1 ">
        
            <div className="w-full container mx-auto flex  flex-wrap justify-between items-center mt-0  py-3">
                <a className="uppercase tracking-wide font-bold text-gray-100 text-xl" href="#">{props.name} </a>
            
                <img className="hidden xl:block mx-16 " src={border} alt="Line border"></img>

                <img className=" md:hidden" src={border} alt="Line border"></img>
            </div>
        </nav>

        {reviews.length &&
        <div>
            <div className="flex w-full flex-nowrap gap-x-2 pb-5">
                <ReviewBox id={reviews[0].id} movieId={reviews[0].movieId} goToReview={props.goToReview}/>
                <ReviewBox id={reviews[1].id} movieId={reviews[1].movieId} goToReview={props.goToReview}/>
            </div>
            <div className="flex w-full  flex-nowrap gap-x-2">
                <ReviewBox id={reviews[2].id} movieId={reviews[2].movieId} goToReview={props.goToReview}/>
                <ReviewBox id={reviews[3].id} movieId={reviews[3].movieId} goToReview={props.goToReview}/>
            </div>
        </div>
        }
   
    </div>

</section>
</div>
)}

export default ReviewBoxDisplay