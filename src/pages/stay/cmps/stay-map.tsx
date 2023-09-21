import { IStay } from "../../../interfaces/stay-interface"
import GoogleMapReact from 'google-map-react'
import { MdHome } from 'react-icons/md'

interface Props {
    stay: IStay
}

const AnyReactCmp = ({ txt }: any) => (
    <div className="map-mmarker">
        <div className="circle">
            <MdHome />
        </div>
    </div>
)

export default function StayMap({ stay }: Props) {
    const props = {
        center: {
            lat: stay.loc.lat,
            lng: stay.loc.lng
        },
        zoom: 14
    }

    return (
        <div className="border-bottom stay-map">
            <h3>Where you'll be</h3>
            <div className="map">
                <GoogleMapReact bootstrapURLKeys={{ key: 'AIzaSyBPSnSB3KM1tGH3au7TEh0NXRhzvaRQZlA' }}
                    center={props.center}
                    zoom={props.zoom}
                >
                    <AnyReactCmp lat={props.center.lat} lng={props.center.lng} />
                </GoogleMapReact>
            </div>
            <div className="about">
                <h5>{stay.loc.country}, {stay.loc.city}</h5>
                <p>{stay.summary}</p>
            </div>
        </div>
    )
}