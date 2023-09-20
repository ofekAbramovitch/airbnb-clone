import { IStay } from "../../../../interfaces/stay-interface"
import StayInfoAirCover from "./stay-info-air-cover"
import StayInfoBonuses from "./stay-info-bonuses"
import StayInfoCalendar from "./stay-info-calender"
import StayInfoHeader from "./stay-info-header"
import StayInfoOffering from "./stay-info-offering"
import StayInfoSleep from "./stay-info-sleep"
import StayInfoSummary from "./stay-info-summary"

interface Props {
    stay: IStay
}

export default function StayInfo({ stay }: Props) {
    return (
        <div className="stay-info">
            <StayInfoHeader stay={stay} />
            <StayInfoBonuses />
            <StayInfoAirCover />
            <StayInfoSummary stay={stay} />
            <StayInfoSleep />
            <StayInfoOffering stay={stay} />
            <StayInfoCalendar stay={stay} />
        </div>
    )
}