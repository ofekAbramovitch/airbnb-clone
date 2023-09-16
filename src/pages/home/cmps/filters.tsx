import { useRef, useState } from "react"
import { IFilterBy } from "../../../interfaces/filter-by-interface"
import { BiChevronRight, BiChevronLeft } from 'react-icons/bi'
import { stayService } from "../../../services/stay.service"
import Filter from "./filter"
import MoreFilters from "./more-filters"

interface Props {
    onFilter: () => void
    filterBy: IFilterBy
    setFiterBy: React.Dispatch<React.SetStateAction<IFilterBy>>
}

const filters = stayService.getFilters()
const moreFiltersIconSrc = 'https://res.cloudinary.com/ofekabramovitch/image/upload/v1694889623/btchk6nxuzp53pefellh.svg'

export default function Filters({ onFilter, filterBy, setFiterBy }: Props) {
    const [isFUllyScrolledRight, setIsFUllyScrolledRight] = useState<boolean>(false)
    const [isFUllyScrolledLeft, setIsFUllyScrolledLeft] = useState<boolean>(false)
    const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false)
    const filterPlacesRef = useRef<HTMLInputElement>(null)

    function onScrollFilters(direction: number) {
        if (filterPlacesRef.current) {
            filterPlacesRef.current.scrollLeft += 1000 * direction
            setTimeout(() => {
                calcIsFullyScrolled()
            }, 600);
        }
    }

    function calcIsFullyScrolled() {
        if (filterPlacesRef.current) {
            setIsFUllyScrolledRight(Math.round(filterPlacesRef.current?.scrollLeft) ===
                Math.round(filterPlacesRef.current?.scrollWidth - filterPlacesRef.current?.clientWidth))
        }
        setIsFUllyScrolledLeft(filterPlacesRef.current?.scrollLeft === 0)
    }

    function onToggleFilters() {
        setIsFilterOpen(prevState => !prevState)
    }

    function onSelectFilter(selectedFilter: string) {
        if (filterBy.selectedFilter === selectedFilter) {
            setFiterBy(prevFilterBy => ({ ...prevFilterBy, selectedFilter: '' }))
            filterBy.selectedFilter = ''
        } else {
            setFiterBy(prevFilterBy => ({ ...prevFilterBy, selectedFilter }))
            filterBy.selectedFilter = selectedFilter
        }
        onFilter()
    }

    function onFilterMiddleware() {
        setIsFilterOpen(false)
        onFilter()
    }

    return (
        <div className="filters">
            <div className={`left-container ${isFUllyScrolledLeft ? 'hide-arrow' : ''}`}>
                <button className={`left mob-hide ${isFUllyScrolledLeft ? 'hide-arrow' : ''}`}
                    onClick={() => onScrollFilters(-1)}>
                    <BiChevronLeft fontSize={'1.2rem'} />
                </button>
            </div>
            <div className="disable-scrollbar filter-places" ref={filterPlacesRef}>
                {filters.map((filter, idx) => {
                    return (
                        <Filter filter={filter}
                            key={idx}
                            selectedFilter={filterBy.selectedFilter}
                            onSelectFilter={onSelectFilter}
                        />
                    )
                })}
            </div>
            <div className="btns">
                <button className={`right mob-hide ${isFUllyScrolledRight ? 'hide-arrow' : ''}`}
                    onClick={() => onScrollFilters(1)}>
                    <BiChevronRight fontSize={'1.2rem'} />
                </button>
                <button className="more-filters" onClick={() => setIsFilterOpen(true)}>
                    <img src={moreFiltersIconSrc} alt="" />
                    <p className="mob-hide">Filters</p>
                </button>
            </div>
            {isFilterOpen && (
                <MoreFilters onToggleFilters={onToggleFilters}
                    onFilterMiddleware={onFilterMiddleware}
                    filterBy={filterBy}
                    setFilterBy={setFiterBy}
                />
            )}
        </div>
    )
}