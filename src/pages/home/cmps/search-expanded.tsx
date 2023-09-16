import { ISearchBy } from "../../../interfaces/search-by-interface"



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

export default function SearchExpanded({isSearchOpen, onToggleSearch, searchBy, updateSearchBy, onSearch}: Props) {



    return (
        <>
        <div className={`experience-type ${isSearchOpen && 'shown'}`}>
            
        </div>
        </>
    )
}