import { IStay } from "../../../interfaces/stay-interface"
import { stayService } from "../../../services/stay.service"
import { FiShare } from 'react-icons/fi'
import { AiFillStar, AiOutlineHeart } from 'react-icons/ai'
import { FaMedal } from 'react-icons/fa'

interface Props {
    stay: IStay
}

export default function StayHeader({ stay }: Props) {
    // getting the rating for the stay by going over the arr of reviews
    // reducing it and dividing by total reviews length
    const rating = stayService.getStayRating(stay)

    return (
        <div className="stay-header">
            <h1>{stay.name}</h1>
            <div className="row">
                <div className="about">
                    <p>
                        <AiFillStar color="black" />
                    </p>
                    <p>{rating.toFixed(2)}</p>
                    <p> . </p>
                    <p className="underline">{stay.reviews.length} reviews</p>
                    <p> . </p>
                    {stay.host.isSuperHost && (
                        <>
                            <p>
                                <FaMedal />
                            </p>
                            <p className="superhost">Superhost</p>
                            <p> . </p>
                        </>
                    )}
                    <p className="underline">{stay.loc.address}</p>
                </div>
                <div className="btns">
                    <button>
                        <FiShare />
                        <p>Share</p>
                    </button>
                    <button>
                        <AiOutlineHeart />
                        <p>Save</p>
                    </button>
                </div>
            </div>
        </div>
    )
}