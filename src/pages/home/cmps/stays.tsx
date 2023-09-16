import { useRef } from "react"
import { ISkeletonStay, IStay } from "../../../interfaces/stay-interface"
import StaySkeleton from "./stay-skeleton"
import StayPreview from "./stay-preview"
interface Props {
    stays: IStay[] | ISkeletonStay[]
    getStays: () => void
    onStay: (_id: string, startDate: Date, endDate: Date) => void
}

export default function Stays({ stays, getStays, onStay }: Props) {
    const firstSkeletonRef = useRef<HTMLDivElement>(null)
    let isFirstSkeleton = true

    function onMount() {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    getStays()
                    observer.unobserve(entry.target)
                }
            },
            { threshold: 0.3 } // Trigger when element is 50% visible
        )
        if (firstSkeletonRef.current) {
            observer.observe(firstSkeletonRef.current)
        }
        return () => {
            if (firstSkeletonRef.current) {
                observer.unobserve(firstSkeletonRef.current)
            }
        }
    }

    return (
        <div className="stays">
            {stays.map((stay: IStay | ISkeletonStay) => {
                if (stay.type === 'skeleton') {
                    if (isFirstSkeleton) {
                        isFirstSkeleton = false
                        return <StaySkeleton key={stay._id} firstSkeletonRef={firstSkeletonRef} onMount={onMount} />
                    } else {
                        return <StaySkeleton key={stay._id} />
                    }
                } else {
                    return <StayPreview stay={stay as IStay} key={stay._id} onStay={onStay} />
                }
            })}
        </div>
    )
}