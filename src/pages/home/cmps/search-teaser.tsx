interface Props {
    onToggleSearch: () => void
    isSearchOpen: boolean
}

export default function SearchTeaser({ onToggleSearch, isSearchOpen }: Props) {
    return (
        <div className={`search-teaser ${isSearchOpen ? 'search-teaser-hide' : ''}`} onClick={onToggleSearch}>
            <p>Anywhere</p>
            <div className="seperator"></div>
            <p>Any week</p>
            <div className="seperator"></div>
            <p className="guests">Add guests</p>
            <div className="search-icon">
                <img src="https://res.cloudinary.com/ofekabramovitch/image/upload/v1694873041/pmpmavtyjubpb9uqfbv1.svg" alt="" />
            </div>
        </div>
    )
}