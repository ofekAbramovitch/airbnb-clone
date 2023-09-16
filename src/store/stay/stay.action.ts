import { ISearchBy } from "../../interfaces/search-by-interface"
import { store } from "../store"
import { SET_SEARCH_BY } from "./stay.reducer"

export async function setSearchBy(searchBy: ISearchBy) {
    store.dispatch({type: SET_SEARCH_BY, searchBy})
}