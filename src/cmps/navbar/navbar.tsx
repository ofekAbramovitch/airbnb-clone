import { useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import { ISearchBy } from "../../interfaces/search-by-interface"
import { setSearchBy } from "../../store/stay/stay.action"

import MobileNavbar from "./mobile-navbar"
import PCNavbar from "./pc-navbar"

export default function Navbar() {
    const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false)
    const isMobile = useSelector((storeState: any) => storeState.appModule.isMobile)
    const searchBy: ISearchBy = useSelector((storeState: any) => storeState.stayModule.searchBy)
    const navigate = useNavigate()

    function updateSearchBy(searchBy: ISearchBy) {
        setSearchBy(searchBy)
    }

    function onToggleSearch() {
        setIsSearchOpen(prevState => !prevState)
    }

    function onSearchMiddleware(ev: React.MouseEvent<HTMLButtonElement>) {
        ev.stopPropagation()
        ev.preventDefault()
        setIsSearchOpen(false)
        navigate(
            `/?destination=${searchBy.destination}&check-in=${searchBy.checkIn.getTime()}&check-out=${searchBy.checkOut.getTime()}
            &adults=${searchBy.adults}&children=${searchBy.children}&infants=${searchBy.infants}&pets=${searchBy.pets}`
        )
    }

    const props = { isSearchOpen, searchBy, onToggleSearch, updateSearchBy, onSearch: onSearchMiddleware }

    return (
        <>
            {isMobile ? <MobileNavbar {...props} /> : <PCNavbar {...props} />}
        </>
    )
}