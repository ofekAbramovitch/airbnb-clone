import { IFilterBy } from "../../../interfaces/filter-by-interface"
import { utilService } from "../../../services/util.service"

interface Props {
    filterBy: IFilterBy
    setFilterBy: React.Dispatch<React.SetStateAction<IFilterBy>>
}

export default function TypeFilter({ filterBy, setFilterBy }: Props) {
    function handleCheckBox(ev: React.ChangeEvent<HTMLInputElement>) {
        const field = ev.target.name
        setFilterBy(prevFilterBy => ({ ...prevFilterBy, types: utilService.toggleElement(prevFilterBy.types, field) }))
    }

    return (
        <div className="type-filter">
            <h5>Type of place</h5>
            <div className="type-filter-inputs">
                <div className="row">
                    <input type="checkbox" name="Entire home/apt"
                        checked={filterBy.types.includes('Entire home/apt')}
                        onChange={handleCheckBox}
                    />
                    <div className="col">
                        <p className="input-header">Entire place</p>
                        <p className="desc">A place all to yourself</p>
                    </div>
                </div>
                <div className="row">
                    <input type="checkbox" name="Private room"
                        checked={filterBy.types.includes('Private room')}
                        onChange={handleCheckBox}
                    />
                    <div className="col">
                        <p className="input-header">Private room</p>
                        <p className="desc">our own room in a home or a hotel, plus some shared common spaces</p>
                    </div>
                </div>
                {/* <div className='row'>
                    <input
                        type='checkbox'
                        name='sharedRoom'
                        id=''
                        checked={filterBy.types.includes('sharedRoom')}
                        onChange={handleCheckbox}
                    />
                    <div className='col'>
                        <p className='input-header'>Shared room</p>
                        <p className='desc'>A sleeping space and common areas that may be shared with others</p>
                    </div>
                </div> */}
            </div>
        </div>
    )
}