import { RiGlobalLine } from 'react-icons/ri'
const hamburgerBarsSrc = 'https://res.cloudinary.com/ofekabramovitch/image/upload/v1694873464/jn9rg7biwp93ja5rvoqz.png'
const userProfileSrc = 'https://res.cloudinary.com/ofekabramovitch/image/upload/v1694873536/ejeprxlfovzfttilxfhp.png'

export default function UserSection() {
    return (
        <section className="user-section">
            <button className="airbnb-cta">Airbnb your home</button>
            <button className="lang">
                <RiGlobalLine fontSize={'19px'} />
            </button>
            <button className="user-open-modal">
                <img src={hamburgerBarsSrc} alt="" />
                <img src={userProfileSrc} alt="" />
            </button>
        </section>
    )
}