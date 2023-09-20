import Calendar from "../../../../cmps/calendar"
import { IStay } from "../../../../interfaces/stay-interface"

interface Props {
    stay: IStay
}

export default function StayInfoCalendar({ stay }: Props) {
    function onCalendarChange(dates: any) { }

    return (
        <div className="stay-info-calendar">
            <Calendar startDate={new Date()}
                endDate={new Date()}
                onChange={onCalendarChange}
                takenDates={stay.takenDates}
            />
        </div>
    )
}