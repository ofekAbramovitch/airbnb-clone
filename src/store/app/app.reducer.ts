export const SET_IS_MOBILE = 'SET_IS_MOBILE'

const initialState = {
    isMobile: window.innerWidth <= 750
}

interface SetIsMobileAction {
    type: 'SET_IS_MOBILE',
    isMobile: boolean
}

type Action = SetIsMobileAction

export function appReducer(state = initialState, action: Action) {
    switch (action.type) {
        case SET_IS_MOBILE:
            return {...state, isMobile: action.isMobile}
        default:
            return {...state}
    }
}