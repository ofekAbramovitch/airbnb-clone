import { IStay } from "../../../../interfaces/stay-interface"

interface Props {
    stay: IStay
}

export default function StayInfoHeader({ stay }: Props) {
    return (
        <div className="border-bottom stay-info-header">
            <div className="col">
                <h3>
                    {stay.roomType} by {stay.host.fullname}
                </h3>
                <p>
                    {stay.stayDetails.guests} guests · {stay.stayDetails.bedrooms} bedrooms · {stay.stayDetails.beds}{' '}
                    beds · {stay.stayDetails.bathrooms} bath
                </p>
            </div>
            <img src={stay.host.imgUrl} alt="" />
        </div>
    )
}