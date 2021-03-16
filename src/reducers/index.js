import { combineReducers } from 'redux'

import posts from './posts'
import bio from './bio'

export default combineReducers({
    posts, bio
})