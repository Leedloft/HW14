import {FILTER_TODO} from "./types";

export const TYPE_OF_FILTER = {
    SHOW_COMPLETE: 'SHOW_COMPLETE',
    SHOW_ALL: 'SHOW_ALL',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}

const initialState = TYPE_OF_FILTER.SHOW_ALL

const filterReducer = (state = initialState,action) => {
    switch (action.type) {
        case FILTER_TODO:
            return action.payload
        default:
            return state
    }
}


export default filterReducer