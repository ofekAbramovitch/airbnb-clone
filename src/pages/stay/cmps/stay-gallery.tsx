import { useState } from "react"
import { useSelector } from "react-redux"
import { IStay } from "../../../interfaces/stay-interface"
import { BsChevronLeft } from 'react-icons/bs'

interface Props {
    stay: IStay
}

export default function StayGallery({ stay }: Props) {
    const isMobile = useSelector((storeState: any) => storeState.appModule.isMobile)
    const [isGalleryExpandedMobile, setIsGalleryExpandedMobile] = useState<boolean>(false)

    function onOpenGalery() {
        if (!isMobile) return
        setIsGalleryExpandedMobile(true)
    }

    return (
        <>
            <div className="stay-gallery">
                <img src={stay.imgUrls[0]} alt="" className="main-image" onClick={onOpenGalery} />
                <div className="grid">
                    <img src={stay.imgUrls[1]} alt="" />
                    <img src={stay.imgUrls[2]} alt="" />
                    <img src={stay.imgUrls[3]} alt="" />
                    <img src={stay.imgUrls[4]} alt="" />
                </div>
            </div>
            {isGalleryExpandedMobile && (
                <>
                    <div className="gallery-mobile-navbar">
                        <button onClick={() => setIsGalleryExpandedMobile(false)}>
                            <BsChevronLeft fontSize={'16px'} />
                        </button>
                    </div>
                    <div className="stay-gallery-expanded">
                        {stay.imgUrls.map((imgUrl, idx) => {
                            return <img src={imgUrl} alt="" key={idx} />
                        })}
                    </div>
                </>
            )}
        </>
    )
}