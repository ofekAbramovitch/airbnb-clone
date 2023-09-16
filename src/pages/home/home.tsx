import { useEffect, useRef, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"

import { utilService } from "../../services/util.service"
import { stayService } from "../../services/stay.service"
import { setSearchBy } from "../../store/stay/stay.action"

import { ISkeletonStay, IStay } from "../../interfaces/stay-interface"
import { IFilterBy } from "../../interfaces/filter-by-interface"
import { ISearchBy } from "../../interfaces/search-by-interface"

import Navbar from "../../cmps/navbar/navbar"
import Filters from "./cmps/filters"
import Stays from "./cmps/stays"
import NoStaysMsg from "./cmps/no-stays-msg"
import MapBtn from "./cmps/map-btn"
import StaysMapListings from "./cmps/stays-map-listings"

const NUM_OF_SKELETONS = 20

export default function Home() {
    let [stays, setStays] = useState<IStay[] | ISkeletonStay[]>(getSkeletonStays())
    const [isMapOpen, setIsMapOpen] = useState<boolean>(false)
    const [filterBy, setFilterBy] = useState<IFilterBy>(stayService.getEmptyFilterBy())
    const currStayPagination = useRef(0)
    const { search } = useLocation()
    const navigate = useNavigate()
    const searchBy: ISearchBy = stayService.getSearchByFromParams()

    useEffect(() => {
        onGetNewStays()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [search])

    function getSkeletonStays(): ISkeletonStay[] {
        const res = []
        for (let i = 0; i < NUM_OF_SKELETONS; i++) {
            res.push({ type: 'skeleton', _id: utilService.makeId() })
        }
        return res
    }

    function onGetNewStays() {
        currStayPagination.current = 0
        stays = []
        setStays(getSkeletonStays())
        getStays()
    }

    async function getStays() {
        let newStays = await stayService.getStays(currStayPagination.current, filterBy, searchBy)
        // Clean all skeletons
        const filteredStays = (stays as IStay[]).filter((stay: IStay) => stay.name)
        if (!newStays.length) {
            // No new stays so no need for skeletons
            setStays([...filteredStays, ...newStays])
        } else {
            setStays([...filteredStays, ...newStays, ...getSkeletonStays()])
            currStayPagination.current++
        }
    }

    function onRemoveFilter() {
        setFilterBy(stayService.getEmptyFilterBy())
        onGetNewStays()
    }

    function onStay(_id: string, startDate: Date, endDate: Date) {
        searchBy.checkIn = new Date(startDate)
        searchBy.checkOut = new Date(endDate)
        setSearchBy(searchBy)
        navigate(`stays/${_id}`)
    }

    async function onClickMap() {
        setIsMapOpen(prevState => !prevState)
        if (isMapOpen) {
            onGetNewStays()
        } else {
            const stays = await stayService.getAllStays()
            setStays(stays)
        }
    }

    return (
        <section className="main-layout home no-scroll">
            <Navbar />
            <Filters onFilter={onGetNewStays} filterBy={filterBy} setFiterBy={setFilterBy} />
            {!isMapOpen && stays.length > 0 && <Stays stays={stays} getStays={getStays} onStay={onStay} />}
            {!isMapOpen && stays.length <= 0 && <NoStaysMsg onRemoveFilter={onRemoveFilter} />}
            <MapBtn isMapOpen={isMapOpen} onClickMap={onClickMap} />
            {isMapOpen && (
                <StaysMapListings stays={stays.filter(stay => stay.type !== 'skeleton') as IStay[]} onStay={onStay} />
            )}
        </section>
    )
}