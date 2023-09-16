import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

interface Props {
    handleGuestsCounter: (inc: number, filterByField: string) => void
    field: string
    count: number
}

export default function Counter({ handleGuestsCounter, field, count }: Props) {
    return (
        <div className="counter">
            <button disabled={count === 0} onClick={() => handleGuestsCounter(-1, field)}>
                <AiOutlineMinus />
            </button>
            <p>{count}</p>
            <button onClick={() => handleGuestsCounter(1, field)}>
                <AiOutlinePlus />
            </button>
        </div>
    )
}