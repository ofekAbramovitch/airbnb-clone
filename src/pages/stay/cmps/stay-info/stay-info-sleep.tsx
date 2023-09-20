const bedroomImg = 'https://res.cloudinary.com/ofekabramovitch/image/upload/v1695247739/zdw3ndluwbkh7zfvlzsq.svg'

export default function StayInfoSleep() {
    return (
        <div className="border-bottom stay-info-sleep">
            <h3>Where you'll sleep</h3>
            <div className="blocks">
                <div className="block">
                    <img src={bedroomImg} alt="" />
                    <h5>Bedroom 1</h5>
                    <p>1 queen bed</p>
                </div>
                <div className="block">
                    <img src={bedroomImg} alt="" />
                    <h5>Bedroom 2</h5>
                    <p>1 double bed</p>
                </div>
                <div className="block">
                    <img src={bedroomImg} alt="" />
                    <h5>Living room</h5>
                    <p>1 double bed</p>
                </div>
            </div>
        </div>
    )
}