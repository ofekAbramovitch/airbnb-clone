interface Props {
    onRemoveFilter: () => void
}

export default function NoStaysMsg({ onRemoveFilter }: Props) {
    return (
        <div className="no-stays-msg">
            <h2 className="heading">No exact matches</h2>
            <p>Try changing or removing some of your filters or adjusting your search area.</p>
            <button onClick={onRemoveFilter}>Remove pice filter</button>
        </div>
    )
}