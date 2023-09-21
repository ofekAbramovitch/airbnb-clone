import { IStayReview } from "../../../interfaces/stay-interface"
import { utilService } from "../../../services/util.service"

interface Props {
    review: IStayReview
}

export default function StayReview({ review }: Props) {
    return (
        <div className="stay-review">
            <div className="row">
                <img src={review.by.imgUrl} alt="" />
                <div className="col">
                    <p className="name">{review.by.fullname}</p>
                    <p className="date">{utilService.formatMonthYear(new Date(review.createdAt))}</p>
                </div>
            </div>
            <p>{review.txt}</p>
        </div>
    )
}