import { useState } from 'react'
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'

interface Props {
    imgUrls: string[]
}

export default function ImgCarousel({ imgUrls }: Props) {
    const [imgIdx, setImgIdx] = useState<number>(0)

    function onNextImg(ev: React.MouseEvent<HTMLButtonElement, MouseEvent>, inc: number) {
        ev.stopPropagation()
        setImgIdx(prevImgIdx => prevImgIdx + inc)
    }

    const carouselSettings = {
        showArrows: false,
        showStatus: false,
        showThumbs: false,
        showIndicators: false,
        selectedItem: imgIdx,
    }

    return (
        <div className="img-carousel">
            {imgIdx > 0 && (
                <button className="carousel-btn left" onClick={ev => onNextImg(ev, -1)}>
                    <BiChevronLeft fontSize={'1.2rem'} />
                </button>
            )}
            <Carousel {...carouselSettings}>
                {imgUrls.map((imgUrl, idx) => {
                    return <img src={imgUrl} alt="" className="stay-img" key={idx} />
                })}
            </Carousel>
            {imgIdx < imgUrls.length - 1 && (
                <button className="carousel-btn right" onClick={ev => onNextImg(ev, 1)}>
                    <BiChevronRight fontSize={'1.2rem'} />
                </button>
            )}
        </div>
    )
}