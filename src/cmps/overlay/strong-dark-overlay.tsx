interface Props {
    onClickFunc: () => void
}

export default function StronDarkOverlay({ onClickFunc }: Props) {
    return (
        <div className="strong-dark-overlay" onClick={onClickFunc}></div>
    )
}