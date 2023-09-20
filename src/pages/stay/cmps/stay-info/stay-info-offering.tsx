import { IStay } from "../../../../interfaces/stay-interface"

interface Props {
    stay: IStay
}

export default function StayInfoOffering({ stay }: Props) {
    const offerings = []
    
    for (let i = 0; i < 10; i++) {
        offerings.push(stay.amenities[i])
    }

    return (
        <div className="border-bottom stay-info-offering">
            <h3>What this place offers</h3>
            <div className="offerings">
                {offerings.map((offering, idx) => {
                    return (
                        <div className="offering" key={idx}>
                            {offering}
                        </div>
                    )
                })}
            </div>
            <button>Show all {stay.amenities.length} amenities</button>
        </div>
    )
}