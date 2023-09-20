import { useMemo, useState } from "react"
import useDidMountEffect from '../customHooks/useDidMountEffect'
import { DateRangePicker } from "react-date-range"

import 'react-date-range/dist/styles.css' // main style file
import 'react-date-range/dist/theme/default.css' // theme css file

import { parseISO } from "date-fns"

interface Props {
    startDate: Date
    endDate: Date
    takenDates: Date[]

    onChange: (ranges: any) => void
}

export default function Calendar({ startDate, endDate, onChange, takenDates }: Props) {
    const [calendarDates, setCalendarDates] = useState({ startDate, endDate })
    const selectionRange = {
        startDate: calendarDates.startDate,
        endDate: calendarDates.endDate,
        key: 'selection'
    }

    const takenDatesFormatted = useMemo(
        () => takenDates.map((date: any) => parseISO(JSON.parse(JSON.stringify(date)))
        ), [takenDates])

    function handleCalendarSelect(ranges: any) {
        setCalendarDates({ startDate: ranges.selection.startDate, endDate: ranges.selection.endDate })
    }

    useDidMountEffect(() => {
        onChange(calendarDates)
    }, [calendarDates])

    return (
        <section className="calendar">
            <DateRangePicker ranges={[selectionRange]}
                minDate={new Date()}
                rangeColors={['#ff385c']}
                onChange={handleCalendarSelect}
                showMonthAndYearPickers={false}
                showDateDisplay={false}
                disabledDates={takenDatesFormatted}
            />
        </section>
    )
}