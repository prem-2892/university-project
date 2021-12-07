import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

// Custom Reducers
import {
    universityListReducer,
    universityPageReducer,
} from './reducers/universityReducers'
import {
    userDetailsReducer,
    userLoginReducer,
    userUpdateProfileReducer,
} from './reducers/userReducers'

const reducer = combineReducers({
    universityList: universityListReducer,
    universityPage: universityPageReducer,
    userLogin: userLoginReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
})

const userInfoFromStorage = localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null

const initialState = {
    userLogin: { userInfo: userInfoFromStorage },
}

const middleware = [thunk]

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store
