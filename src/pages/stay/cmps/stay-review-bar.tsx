interface Props {
    name: string
    rating: number
}

export default function StayReviewBar({ name, rating }: Props) {
    const barWidth = `${(rating / 5) * 100}%`

    return (
        <div className="stay-review-bar">
            <p>{name}</p>
            <div className="bar-wrapper">
                <div className="bar">
                    <div className="bar-complete" style={{ width: barWidth }}></div>
                </div>
                <p className="rating">{rating.toFixed(1)}</p>
            </div>
        </div>
    )
}