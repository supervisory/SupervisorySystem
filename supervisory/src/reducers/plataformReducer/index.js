import { PLATAFORM_IS_MOBILE } from '../../actions/plataformActions'

const initialState = {
    isMobile: false
}

export const plataformReducer = (state = initialState, action) => {
    switch (action.type) {
        case PLATAFORM_IS_MOBILE:
            return {
                ...state,
                isMobile: action.isMobile
            }
        default:
            return state
    }
}
