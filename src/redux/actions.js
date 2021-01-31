import constants from './constants'

export const fetchPosts = () => {
    return {
        type: constants.FETCH_POSTS
    }
}