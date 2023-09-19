import { IStay } from "../../../../interfaces/stay-interface"
import StayInfoBonuses from "./stay-info-bonuses"
import StayInfoHeader from "./stay-info-header"

interface Props {
    stay: IStay
}

export default function StayInfo({ stay }: Props) {
    return (
        <div className="stay-info">
            <StayInfoHeader stay={stay} />
            <StayInfoBonuses />
        </div>
    )
}