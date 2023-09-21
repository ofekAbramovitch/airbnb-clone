import { useState, useRef, useEffect } from 'react'
import { useSelector } from "react-redux"
import useOutsideAlerter from '../../../customHooks/useOutsideAlerter'

import { utilService } from '../../../services/util.service'

import { ISearchBy } from "../../../interfaces/search-by-interface"
import { IStay } from "../../../interfaces/stay-interface"
import { setSearchBy } from '../../../store/stay/stay.action'

import Calendar from '../../../cmps/calendar'
import SearchGuests from '../../home/cmps/search-guests'
import Loader from '../../../cmps/loader'

const PRICE_INC_PER_PERSON_PERCENT = 1.05

interface Props {
    stay: IStay
    searchBy: ISearchBy
    onReserve: () => void
    isReserving: boolean
    isDatesTaken: boolean
    setIsDatesTaken: React.Dispatch<React.SetStateAction<boolean>>
}

export default function StayReserve({ stay, searchBy, onReserve, isReserving, isDatesTaken, setIsDatesTaken }: Props) {
    const isMobile = useSelector((storeState: any) => storeState.appModule.isMobile)
    const [isExpandedMobile, setIsExpandedMobile] = useState<boolean>(false)
    const [stayprice, setStayPrice] = useState<number>(0)
    const [isCalendarOpen, setIsCalendarOpen] = useState<boolean>(false)
    const [isGuestsOpen, setIsGuestsOpen] = useState<boolean>(false)
    const guestsWrapperRef = useRef<HTMLInputElement | null>(null)
    const calendarWrapperRef = useRef<HTMLInputElement | null>(null)
    const tax = useRef(Math.round(Math.random() * 60))

    useOutsideAlerter(guestsWrapperRef, clearSlate)
    useOutsideAlerter(calendarWrapperRef, clearSlate)

    useEffect(() => {
        calculateStayPrice()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchBy])

    function clearSlate() {
        setIsGuestsOpen(false)
        setIsCalendarOpen(false)
    }

    function calculateStayPrice() {
        const pricePerNight = calculateStayPricePerNight()
        const numberOfNights = calculateStayNumOfDates()
        setStayPrice(pricePerNight * numberOfNights)
    }

    function calculateStayPricePerNight() {
        let pricePerNight = stay.price
        const numOfPeople = searchBy.adults + searchBy.children + searchBy.infants + searchBy.pets
        if (numOfPeople > 1) {
            pricePerNight = stay.price * PRICE_INC_PER_PERSON_PERCENT ** numOfPeople
        }
        return Math.round(pricePerNight)
    }

    function calculateStayNumOfDates() {
        const checkInDate = new Date(searchBy.checkIn) // convert check-in timestamp to a Date object
        const checkOutDate = new Date(searchBy.checkOut) // convert check-out timestamp to a Date object
        const timeDiff = checkOutDate.getTime() - checkInDate.getTime() // get time difference in milliseconds
        const numOfNights = Math.ceil(timeDiff / (1000 * 3600 * 24)) // convert milliseconds to days and round up to nearest whole number
        return numOfNights || 1
    }

    function onCalendarChange(dates: any) {
        setSearchBy({ ...searchBy, checkIn: dates.startDate, checkOut: dates.endDate })
        setIsDatesTaken(false)
    }

    function handleGuestsCounter(inc: number, searchByField: string) {
        const updatedField = +searchBy[searchByField] + inc
        setSearchBy({ ...searchBy, [searchByField]: updatedField })
    }

    return (
        <>
            {isMobile && (
                <div className={`stay-reserve-teaser ${isExpandedMobile ? 'expanded' : ''}`}
                    onClick={() => setIsExpandedMobile(true)}>
                    <div className="about">
                        <div className="row">
                            <h3>${calculateStayPricePerNight()}</h3>
                            <p>night</p>
                        </div>
                        <div className="date">
                            {searchBy.checkIn.toLocaleDateString()} - {searchBy.checkOut.toLocaleDateString()}
                        </div>
                    </div>
                    <div className="reserve">Reserve</div>
                </div>
            )}
            <div className={`stay-reserve ${isExpandedMobile ? 'expanded' : ''}`}>
                {isMobile && (
                    <div className="close-btn">
                        <button onClick={() => setIsExpandedMobile(false)}>Close</button>
                    </div>
                )}
                {isCalendarOpen && (
                    <div className="calendar-wrapper" ref={calendarWrapperRef}>
                        <Calendar startDate={new Date(searchBy.checkIn)}
                            endDate={new Date(searchBy.checkOut)}
                            onChange={onCalendarChange}
                            takenDates={stay.takenDates}
                        />
                        <button className="close" onClick={() => setIsCalendarOpen(false)}>
                            Close
                        </button>
                    </div>
                )}
                <div className="pricing">
                    <h3>${calculateStayPricePerNight()}</h3>
                    <p>night</p>
                </div>
                <div className={`reserve-picker ${isDatesTaken ? 'taken' : ''}`}>
                    <div className="dates">
                        <div className="date-pick check-in" onClick={() => setIsCalendarOpen(true)}>
                            <p className="heading">Check-in</p>
                            <p className="info">{searchBy.checkIn.toLocaleDateString()}</p>
                        </div>
                        <div className="date-pick check-out" onClick={() => setIsCalendarOpen(true)}>
                            <p className="heading">Check-out</p>
                            <p className="info">{searchBy.checkOut.toLocaleDateString()}</p>
                        </div>
                    </div>
                    <div className="guests" onClick={() => setIsGuestsOpen(true)}>
                        <p className="heading">Guests</p>
                        <p className="info">{utilService.guestsCountFormatted(searchBy)}</p>
                    </div>
                </div>
                {isGuestsOpen && (
                    <div className="guests-wrapper" ref={guestsWrapperRef}>
                        <SearchGuests searchBy={searchBy} handleGuestsCounter={handleGuestsCounter} />
                    </div>
                )}
                <button className="reserve-btn" onClick={onReserve}>
                    {isReserving ? <Loader /> : 'Reserve'}
                </button>
                <p className="disclaimer">You won't be charged yet</p>
                <div className="pricing-summary">
                    <div className="row">
                        <p>${calculateStayPricePerNight()} x {calculateStayNumOfDates()} nights</p>
                        <p>${stayprice}</p>
                    </div>
                    <div className="row">
                        <p>Taxes</p>
                        <p>${tax.current}</p>
                    </div>
                </div>
                <div className="total">
                    <p>Total</p>
                    <p>${stayprice + tax.current}</p>
                </div>
            </div>
        </>
    )
}