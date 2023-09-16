export interface ISearchBy {
    [key: string]: string | number | Date
    destination: string
    adults: number
    children: number
    infants: number
    pets: number
    checkIn: Date
    checkOut: Date
}
