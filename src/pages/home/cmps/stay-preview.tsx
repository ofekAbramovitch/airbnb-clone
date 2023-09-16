import { IStay } from "../../../interfaces/stay-interface"
import { AiFillStar } from 'react-icons/ai'
import { stayService } from "../../../services/stay.service"

interface Props {
    stay: IStay
    onStay: (_id: string, startDate: Date, endDate: Date) => void
}

export default function StayPreview({ stay, onStay }: Props) {
    // getting the rating for the stay by going over the arr of reviews
    // reducing it and dividing by total reviews length
    const rating = stayService.getStayRating(stay)

    return (
        <article className="stay-preview" onClick={() => onStay(stay._id, stay.datesForPreview[0], stay.datesForPreview[1])}>
            
        </article>
    )
}