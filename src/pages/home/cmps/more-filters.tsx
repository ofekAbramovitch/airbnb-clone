import { IFilterBy } from "../../../interfaces/filter-by-interface"
import { AiOutlineClose } from 'react-icons/ai'
import PriceFilter from "./price-filter"
import TypeFilter from "./type-filter"
import StronDarkOverlay from "../../../cmps/overlay/strong-dark-overlay"

interface Props {
    onToggleFilters: () => void
    onFilterMiddleware: () => void
    filterBy: IFilterBy
    setFilterBy: React.Dispatch<React.SetStateAction<IFilterBy>>
}

export default function MoreFilters({ onToggleFilters, onFilterMiddleware, filterBy, setFilterBy }: Props) {
    return (
        <>
            <div className="modal-filter">
                <div className="header">
                    <button className="close" onClick={onToggleFilters}>
                        <AiOutlineClose fontSize={'16px'} />
                    </button>
                    <h4>Filters</h4>
                </div>
                <div className="content">
                    <PriceFilter filterBy={filterBy} setFilterBy={setFilterBy} />
                    <TypeFilter filterBy={filterBy} setFilterBy={setFilterBy} />
                </div>
                <div className="footer">
                    <button className="clear">Clear All</button>
                    <button className="show-homes" onClick={onFilterMiddleware}>
                        Show homes
                    </button>
                </div>
            </div>
            <StronDarkOverlay onClickFunc={onToggleFilters} />
        </>
    )
}