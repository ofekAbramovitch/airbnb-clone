import { IStay } from "../../../interfaces/stay-interface"
import GoogleMapReact from 'google-map-react'

interface Props {
    stays: IStay[]
    onStay: (_id: string, startDate: Date, endDate: Date) => void
}

const StayPriceOnMap = ({ price, onClickFunc }: any) => (
    <div className="map-marker" onClick={onClickFunc}>
        ${price}
    </div>
)

export default function StaysMapListings({ stays, onStay }: Props) {
    const props = {
        center: {
            lat: 40,
            lng: 40,
        },
        zoom: 2,
    }

    return (
        <div className="stay-map-listings">
            <GoogleMapReact bootstrapURLKeys={{ key: 'AIzaSyBPSnSB3KM1tGH3au7TEh0NXRhzvaRQZlA' }}
                center={props.center}
                zoom={props.zoom}
            >
                {stays.map((stay, idx) => {
                    return (
                        <StayPriceOnMap lat={stay.loc.lat}
                            lng={stay.loc.lng}
                            key={idx}
                            price={stay.price}
                            onClickFunc={() => onStay(stay._id, stay.datesForPreview[0], stay.datesForPreview[1])}
                        />
                    )
                })}
            </GoogleMapReact>
        </div>
    )
}