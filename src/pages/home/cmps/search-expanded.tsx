import { useState } from "react"

import { ISearchBy } from "../../../interfaces/search-by-interface"

import SearchLocation from "./search-location"
import SearchDatePicker from "./search-date-picker"
import SearchGuests from "./search-guests"
import DarkOverlay from "../../../cmps/overlay/dark-overlay"

import { utilService } from "../../../services/util.service"
interface Props {
    isSearchOpen: boolean
    onToggleSearch: () => void
    searchBy: ISearchBy
    updateSearchBy: (ISearchBy: ISearchBy) => void
    onSearch: (ev: React.MouseEvent<HTMLButtonElement>) => void
}
interface ModuleMap {
    [key: string]: React.ReactNode
}

const searchIconSrc = 'https://res.cloudinary.com/ofekabramovitch/image/upload/v1694881435/cvby2rcsziihnzavvi1n.svg'

export default function SearchExpanded({ isSearchOpen, onToggleSearch, searchBy, updateSearchBy, onSearch }: Props) {
    const [selectedExperience, setSelectedExperience] = useState<string>('Stays')
    const [selectedModule, setSelectedModule] = useState<string>('')

    function handleGuestsCounter(inc: number, searchByField: string) {
        const updatedField = +searchBy[searchByField] + inc
        updateSearchBy({ ...searchBy, [searchByField]: updatedField })
    }

    function setSelectedModuleMiddleware(ev: React.MouseEvent<HTMLLabelElement, MouseEvent>, module: string) {
        ev.stopPropagation()
        ev.preventDefault()

        setSelectedModule(prevModule => {
            if (prevModule === module) return ''
            else return module
        })
    }

    function handleSelect() {
        switch (selectedModule) {
            case 'searchLocation':
                setSelectedModule('searchDatePickerIn')
                break
            case 'searchDatePickerIn':
                setSelectedModule('searchDatePickerOut')
                break
            case 'searchDatePickerOut':
                setSelectedModule('searchGuests')
                break
            default:
                break
        }
    }

    const moduleMap: ModuleMap = {
        searchLocation: (
            <SearchLocation searchBy={searchBy} updateSearchBy={updateSearchBy} handleSelect={handleSelect} />
        ),
        searchDatePickerIn: (
            <SearchDatePicker searchBy={searchBy} updateSearchBy={updateSearchBy} handleSelect={handleSelect} />
        ),
        searchDatePickerOut: (
            <SearchDatePicker searchBy={searchBy} updateSearchBy={updateSearchBy} handleSelect={handleSelect} />
        ),
        searchGuests: <SearchGuests handleGuestsCounter={handleGuestsCounter} searchBy={searchBy} />
    }

    return (
        <>
            <div className={`experience-type ${isSearchOpen && 'shown'}`}>
                <button className={`${selectedExperience === 'Stays' ? 'active' : ''}`}
                    onClick={() => setSelectedExperience('Stays')}>
                    Stays
                </button>
                <button className={`${selectedExperience === 'Experiences' ? 'active' : ''}`}
                    onClick={() => setSelectedExperience('Experiences')}>
                    Experiences
                </button>
                <button className={`${selectedExperience === 'Online Experiences' ? 'active' : ''}`}
                    onClick={() => setSelectedExperience('Online Experiences')}>
                    Online Experiences
                </button>
            </div>
            <div className={`search-expanded ${isSearchOpen && 'shown'}`}>
                <div className="search-expanded-search">
                    <label className={`module-btn where ${selectedModule === 'searchLocation' ? 'active' : ''}`}
                        onClick={ev => setSelectedModuleMiddleware(ev, 'searchLocation')}
                    >
                        <p className="header">Where</p>
                        <input type="text" placeholder="Search destinations" value={searchBy.destination} readOnly />
                    </label>
                    <label className={`module-btn check-in ${selectedModule === 'searchDatePickerIn' ? 'active' : ''}`}
                        onClick={ev => setSelectedModuleMiddleware(ev, 'searchDatePickerIn')}
                    >
                        <p className="header">Check in</p>
                        <input type="text" placeholder="Add dates" value={searchBy.checkIn.toLocaleDateString()} readOnly />
                    </label>
                    <label className={`module-btn check-out ${selectedModule === 'searchDatePickerOut' ? 'active' : ''}`}
                        onClick={ev => setSelectedModuleMiddleware(ev, 'searchDatePickerOut')}
                    >
                        <p className="header">Check out</p>
                        <input type="text" placeholder="Add dates" value={searchBy.checkOut.toLocaleDateString()} readOnly />
                    </label>
                    <label className={`module-btn who ${selectedModule === 'searchGuests' ? 'active' : ''}`}
                        onClick={ev => setSelectedModuleMiddleware(ev, 'searchGuests')}
                    >
                        <div className="col">
                            <p className="header">Who</p>
                            <input type="text" placeholder="Add guests" value={utilService.guestsCountFormatted(searchBy)} readOnly />
                        </div>
                        <button className="search-btn" onClick={onSearch}>
                            <img src={searchIconSrc} alt="" /> Search
                        </button>
                    </label>
                    {moduleMap[selectedModule]}
                </div>
            </div>
            {isSearchOpen && <DarkOverlay onClickFunc={onToggleSearch} />}
        </>
    )
}