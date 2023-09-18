import Navbar from "../../../../cmps/navbar/navbar"
import StaySkeletonGallery from "./stay-skeleton-gallery"
import StaySkeletonHeader from "./stay-skeleton-header"
import StaySkeletonInfoHeader from "./stay-skeleton-info-header"
import StaySkeletonReserve from "./stay-skeleton-reserve"

export default function StaySkeletonView() {
    return (
        <div className="stay-view-layout stay-skeleton-view">
            <Navbar />
            <div className="heading">
                <StaySkeletonHeader />
                <StaySkeletonGallery />
            </div>
            <div className="stay-view-seperator">
                <StaySkeletonInfoHeader />
                <StaySkeletonReserve />
            </div>
        </div>
    )
}