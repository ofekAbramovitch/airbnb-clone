import { BsDash } from 'react-icons/bs'
import { IFilterBy } from '../../../interfaces/filter-by-interface'

interface Props {
    filterBy: IFilterBy
    setFilterBy: React.Dispatch<React.SetStateAction<IFilterBy>>
}

export default function PriceFilter({ filterBy, setFilterBy }: Props) {
    function handleChange(ev: React.ChangeEvent<HTMLInputElement>) {
        const value = ev.target.value
        if (isNaN(Number(value))) return
        const field: string = ev.target.name
        setFilterBy(prevFilterBy => ({ ...prevFilterBy, [field]: +value }))
    }

    return (
        <div className="price-filter">
            <h5>Price range</h5>
            <p>The average nightly price is $75</p>
            <div className="inputs">
                <label>
                    <p>min price</p>
                    <p className="currency">$</p>
                    <input type="text" name='minPrice' value={filterBy.minPrice} onChange={handleChange} />
                </label>
                <p className="dash">
                    <BsDash fontSize={'30px'} />
                </p>
                <label>
                    <p>max price</p>
                    <p className="currency">$</p>
                    <input type="text" name='maxPrice' value={filterBy.maxPrice} onChange={handleChange} />
                </label>
            </div>
        </div>
    )
}