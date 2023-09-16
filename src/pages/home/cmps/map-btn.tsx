const mapIconSrc = 'https://res.cloudinary.com/ofekabramovitch/image/upload/v1694895994/qporfvrp4b75q1edd5wq.svg'
const listIconSrc = 'https://res.cloudinary.com/ofekabramovitch/image/upload/v1694896049/d0pvl12xw3ikrlmvhsg3.svg'

interface Props {
    isMapOpen: boolean
    onClickMap: () => void
}

export default function MapBtn({ isMapOpen, onClickMap }: Props) {
    return (
        <button className="map-btn" onClick={onClickMap}>
            {isMapOpen ? (
                <>
                    <p>Show list</p>
                    <img src={listIconSrc} alt="" />{' '}
                </>
            ) : (
                <>
                    <p>Show map</p>
                    <img src={mapIconSrc} alt="" />{' '}
                </>
            )}
        </button>
    )
}