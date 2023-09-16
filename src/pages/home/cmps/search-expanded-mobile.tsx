import { useEffect, useState } from "react"

import { ISearchBy } from "../../../interfaces/search-by-interface"

import { AiOutlineClose } from 'react-icons/ai'

interface Props {
    isSearchOpen: boolean
    onToggleSearch: () => void
    searchBy: ISearchBy
    updateSearchBy: (ISearchBy: ISearchBy) => void
    onSearch: (ev: React.MouseEvent<HTMLButtonElement>) => void
}

export default function SearchExpandedMobile({ isSearchOpen, onToggleSearch, searchBy, updateSearchBy, onSearch }: Props) {
    const [selectedExperience, setSelectedExperience] = useState<string>('Stays')
    const [selectedModule, setSelectedModule] = useState<string>('')

    useEffect(() => {
        document.body.classList.add('remove-scrollbar')
        return () => {
            document.body.classList.remove('remove-scrollbar')
        }
    }, [])

    function handleGuestsCounter(inc: number, searchByField: string) {
        const updatedField = +searchBy[searchByField] + inc
        updateSearchBy({ ...searchBy, [searchByField]: updatedField })
    }

    function guestsCountFormatted() {
        const guestsCount = searchBy.adults + searchBy.children + searchBy.infants + searchBy.pets
        if (guestsCount === 0) return 'Add guests'
        if (guestsCount === 1) return '1 guest'
        else return `${guestsCount} guests`
    }

    function setSelectedModuleMiddleware(ev: React.MouseEvent<HTMLDivElement, MouseEvent>, module: string) {
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
                setSelectedModule('searchDatePicker')
                break
            default:
                break;
        }
    }

    return (
        <div className="main-layout search-expanded=mobile">
            <button className="close" onClick={onToggleSearch}>
                <AiOutlineClose fontSize={'13px'} fontWeight={700} />
            </button>
            <div className="experiences">
                <p className={selectedExperience === 'Stays' ? 'active' : ''} onClick={() => setSelectedExperience('Stays')}>
                    Stays
                </p>
                <p className={selectedExperience === 'Experiences' ? 'active' : ''} onClick={() => setSelectedExperience('Experiences')}>
                    Experiences
                </p>
            </div>
        </div>
    )
}