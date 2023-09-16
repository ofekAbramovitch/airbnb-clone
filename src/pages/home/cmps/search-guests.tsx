import { ISearchBy } from "../../../interfaces/search-by-interface"
import Counter from "./counter"

interface Props {
    handleGuestsCounter: (inc: number, searchByField: string) => void
    searchBy: ISearchBy
}

export default function SearchGuests({ handleGuestsCounter, searchBy }: Props) {
    return (
        <section className="search-module search-guests">
            <div className="row adults">
                <div className="col">
                    <p className="header">Adults</p>
                    <p className="desc">Ages 13 or above</p>
                </div>
                <Counter handleGuestsCounter={handleGuestsCounter} field={'adults'} count={searchBy.adults} />
            </div>
            <div className="row children">
                <div className="col">
                    <p className="header">Children</p>
                    <p className="desc">Ages 2-12</p>
                </div>
                <Counter handleGuestsCounter={handleGuestsCounter} field={'children'} count={searchBy.children} />
            </div>
            <div className="row infants">
                <div className="col">
                    <p className="header">Infants</p>
                    <p className="desc">Under 2</p>
                </div>
                <Counter handleGuestsCounter={handleGuestsCounter} field={'infants'} count={searchBy.infants} />
            </div>
            <div className="row pets">
                <div className="col">
                    <p className="header">Pets</p>
                    <p className="desc">Bringing a service animal?</p>
                </div>
                <Counter handleGuestsCounter={handleGuestsCounter} field={'pets'} count={searchBy.pets} />
            </div>
        </section>
    )
}