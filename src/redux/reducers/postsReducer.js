import constants from '../constants'

const { FETCH_POSTS } = constants

const initialState = {
    allIds:[],
    byIds:{}
};

const postsReducer = (state = initialState, action) => {
    const { type, paylaod } = action 
    switch (type) {
        case FETCH_POSTS:
            return {
                ...state,
                allIds: paylaod.allIds,
                byIds: paylaod.byIds
            }    
        default:
            return state
    }
}
export default postsReducer