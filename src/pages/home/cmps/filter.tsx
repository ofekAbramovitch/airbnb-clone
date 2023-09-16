import { IFilter } from "../../../interfaces/filter-interface";

interface Props {
    filter: IFilter
    selectedFilter: string
    onSelectFilter: (selectedFilter: string) => void
}

export default function Filter({ filter, selectedFilter, onSelectFilter }: Props) {
    return (
        <div className={`filter ${selectedFilter === filter.filter ? 'selected' : ''}`}
            onClick={() => onSelectFilter(filter.filter)}>
            <img src={filter.img} alt="" />
            <p>{filter.filter}</p>
        </div>
    )
}