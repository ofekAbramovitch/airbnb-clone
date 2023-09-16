import { ISearchBy } from "../../interfaces/search-by-interface"
import { BiSearch } from 'react-icons/bi'
import SearchExpandedMobile from "../../pages/home/cmps/search-expanded-mobile"

interface Props {
    searchBy: ISearchBy
    updateSearchBy: (ISearchBy: ISearchBy) => void
    onSearch: (ev: React.MouseEvent<HTMLButtonElement>) => void
    onToggleSearch: () => void
    isSearchOpen: boolean
}

export default function MobileNavbar({ searchBy, updateSearchBy, onSearch, isSearchOpen, onToggleSearch }: Props) {
    return (
        <>
            <nav className="mobile-navbar">
                <div className="search-teaser" onClick={onToggleSearch}>
                    <div className="search-icon">
                        <BiSearch fontSize={'20px'} />
                    </div>
                    <div className="col">
                        <p>Anywhere</p>
                        <div className="row">
                            <p>Any week</p>
                            <p>•</p>
                            <p>Add guests</p>
                        </div>
                    </div>
                </div>
            </nav>
            {isSearchOpen && (
                <SearchExpandedMobile isSearchOpen={isSearchOpen}
                    onToggleSearch={onToggleSearch}
                    searchBy={searchBy}
                    updateSearchBy={updateSearchBy}
                    onSearch={onSearch}
                />
            )}
        </>
    )
}