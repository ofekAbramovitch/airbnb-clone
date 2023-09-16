import { stayService } from '../../services/stay.service'
import { ISearchBy } from '../../interfaces/search-by-interface'

export const SET_SEARCH_BY = 'SET_SEARCH_BY'

const initialState = {
    searchBy: stayService.getSearchByFromParams()
}

interface SetSearchByAction {
    type: 'SET_SEARCH_BY',
    searchBy: ISearchBy
}

type Action = SetSearchByAction

export function stayReducer(state = initialState, action: Action) {
    switch (action.type) {
        case SET_SEARCH_BY:
            return { ...state, searchBy: action.searchBy }
        default:
            return { ...state }
    }
}