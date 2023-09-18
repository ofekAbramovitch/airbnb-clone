import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"

import { utilService } from "../../services/util.service"
import { stayService } from "../../services/stay.service"

import { ISkeletonStay, IStay } from "../../interfaces/stay-interface"
import { ISearchBy } from "../../interfaces/search-by-interface"

import { setSearchBy } from "../../store/stay/stay.action"

import StaySkeletonView from "./cmps/stay-skeleton-view/stay-skeleton-view"
import Navbar from "../../cmps/navbar/navbar"

export default function Stay() {
    const [stay, setStay] = useState<IStay | ISkeletonStay>(getSkeletonStayView())
    const [isReserving, setIsReserving] = useState<boolean>(false)
    const [isReserved, setIsReserved] = useState<boolean>(false)
    const [isDatesTaken, setIsDatesTaken] = useState<boolean>(false)
    const searchBy: ISearchBy = useSelector((storeState: any) => storeState.stayModule.searchBy)
    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        getStay()
        prepareSearchBy()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    function prepareSearchBy() {
        if (searchBy.adults <= 0) {
            searchBy.adults = 1
            setSearchBy(searchBy)
        }
    }

    function getSkeletonStayView() {
        return { type: 'skeleton', _id: utilService.makeId() }
    }

    async function getStay() {
        try {
            if (id) {
                const stay = await stayService.getStay(id)
                if (!stay) {
                    navigate('/')
                }
                setStay(stay)
            } else {
                navigate('/')
            }
        } catch (err) {
            navigate('/')
            console.error(err)
        }
    }

    async function onReserve() {
        if (!stayService.validateDateRange(searchBy.checkIn, searchBy.checkOut, (stay as IStay).takenDates)) {
            setIsDatesTaken(true)
            return
        }
        setIsReserving(true)
            ; (stay as IStay).takenDates.push(...stayService.getDatesArray(searchBy.checkIn, searchBy.checkOut))
        try {
            await stayService.saveStay(stay as IStay)
        } catch (err) {
            console.error(err)
        }
        setIsReserving(false)
        setIsReserved(true)
    }

    if (stay.type === 'skeleton') return <StaySkeletonView />
    return (
        <>
            <section className="stay-view-layout">
                <Navbar />
                <div className="heading">
                    
                </div>
            </section>
        </>
    )
}