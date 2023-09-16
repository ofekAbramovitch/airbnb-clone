interface Props {
    onClickFunc: () => void
}

export default function DarkOverlay({ onClickFunc }: Props) {
    return (
        <div className="dark-overlay" onClick={onClickFunc}></div>
    )
}