import { IStay } from "../../../interfaces/stay-interface"
import { AiFillStar } from 'react-icons/ai'
import { MdVerifiedUser } from 'react-icons/md'
import { FaMedal } from 'react-icons/fa'

interface Props {
    stay: IStay
}

export default function StayHost({ stay }: Props) {
    return (
        <div className="border-bottom stay-host">
            <div className="row">
                <img src={stay.host.imgUrl} alt="" />
                <div className="col">
                    <h3>Hosted by {stay.host.fullname}</h3>
                    <p>Joined in January 2015</p>
                </div>
            </div>
            <div className="grid">
                <div className="wrapper-1">
                    <div className="host-info">
                        <p>
                            <AiFillStar color="black" />
                            55 reviews
                        </p>
                        <p>
                            <FaMedal />
                            Superhost
                        </p>
                        <p>
                            <MdVerifiedUser />
                            Identity verified
                        </p>
                    </div>
                    <div className="desc">
                        <h5>During your stay</h5>
                        <p>
                            We offer you a house with full equipment, where you can cook your own food, have bbq or just
                            7-8 driving distance from center.
                            <br />
                            You can reach me anytime we will get back to your messages as soon as possible.
                        </p>
                        <h5>{stay.host.fullname} is a Superhost</h5>
                        <p>
                            Superhosts are experienced, highly rated hosts who are committed to providing great stays
                            for guests.
                        </p>
                    </div>
                </div>
                <div className="wrapper-2">
                    <p>Languages: English, עברית, Русский</p>
                    <div className="payment">
                        <img src="https://res.cloudinary.com/ofekabramovitch/image/upload/v1695313240/kxwvcepefutqxqpqqixq.svg" alt="" />
                        <p>
                            To protect your payment, never transfer
                            <br /> money or communicate outside of the Airbnb
                            <br /> website or app.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}