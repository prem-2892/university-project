import {
    UNIVERSITY_LIST_REQUEST,
    UNIVERSITY_LIST_SUCCESS,
    UNIVERSITY_LIST_FAIL,
    UNIVERSITY_PAGE_REQUEST,
    UNIVERSITY_PAGE_SUCCESS,
    UNIVERSITY_PAGE_FAIL,
} from '../constants/universityConstants'

export const universityListReducer = (state = { universities: [] }, action) => {
    switch (action.type) {
        case UNIVERSITY_LIST_REQUEST:
            return { loading: true, universities: [] }

        case UNIVERSITY_LIST_SUCCESS:
            return { loading: false, universities: action.payload }

        case UNIVERSITY_LIST_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}

export const universityPageReducer = (state = { university: {} }, action) => {
    switch (action.type) {
        case UNIVERSITY_PAGE_REQUEST:
            return { loading: true, ...state }

        case UNIVERSITY_PAGE_SUCCESS:
            return { loading: false, university: action.payload }

        case UNIVERSITY_PAGE_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}
