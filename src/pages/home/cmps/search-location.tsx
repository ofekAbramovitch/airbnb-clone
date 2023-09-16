import { ISearchBy } from "../../../interfaces/search-by-interface"
import regionImgAll from '../../../assets/img/regions/all.webp'
import regionImgME from '../../../assets/img/regions/middle-east.webp'
import regionImgIT from '../../../assets/img/regions/italy.webp'
import regionImgFR from '../../../assets/img/regions/france.webp'
import regionImgSA from '../../../assets/img/regions/south-america.webp'
import regionImgUSA from '../../../assets/img/regions/usa.webp'

interface Props {
    isMobile?: boolean
    searchBy: ISearchBy
    updateSearchBy: (ISearchBy: ISearchBy) => void
    handleSelect: () => void
}

export default function SearchLocation({ isMobile, searchBy, updateSearchBy, handleSelect }: Props) {
    const regions = [
        { label: "i'm flexible", img: regionImgAll },
        { label: 'middle east', img: regionImgME },
        { label: 'italy', img: regionImgIT },
        { label: 'south america', img: regionImgSA },
        { label: 'france', img: regionImgFR },
        { label: 'united states', img: regionImgUSA },
    ]

    function onSelectRegion(region: string) {
        updateSearchBy({ ...searchBy, destination: region })
        handleSelect()
    }

    return (
        <section className="search-module search-location">
            <h4 className="title">Search by region</h4>
            {isMobile && <input type="text" placeholder="Search destination" />}
            <div className="wrapper">
                <div className="regions">
                    {regions.map(r => {
                        return (
                            <div className="region" key={r.label} onClick={() => onSelectRegion(r.label)}>
                                <img src={r.img} alt="" className={`region-img ${searchBy.destination === r.label ? 'active' : ''}`}
                                />
                                <p className="label">{r.label}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}