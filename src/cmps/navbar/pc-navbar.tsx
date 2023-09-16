import { ISearchBy } from "../../interfaces/search-by-interface"
import SearchExpanded from "../../pages/home/cmps/search-expanded"
import SearchTeaser from "../../pages/home/cmps/search-teaser"
import UserSection from "../../pages/home/cmps/user-section"
import Logo from "./logo"

interface Props {
    searchBy: ISearchBy
    updateSearchBy: (ISearchBy: ISearchBy) => void
    onSearch: (ev: React.MouseEvent<HTMLButtonElement>) => void
    onToggleSearch: () => void
    isSearchOpen: boolean
}

export default function PCNavbar({ searchBy, updateSearchBy, onSearch, onToggleSearch, isSearchOpen }: Props) {
    return (
        <>
            <nav className={`navbar ${isSearchOpen ? 'expanded' : ''}`}>
                <Logo />
                <SearchTeaser isSearchOpen={isSearchOpen} onToggleSearch={onToggleSearch} />
                <UserSection />
            </nav>
            <SearchExpanded isSearchOpen={isSearchOpen}
                onToggleSearch={onToggleSearch}
                searchBy={searchBy}
                updateSearchBy={updateSearchBy}
                onSearch={onSearch}
            />
            <div className="full-bleed border"></div>
        </>
    )
}