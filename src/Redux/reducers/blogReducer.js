import blogs from './blogs.json';
const initialState = {
    discover: blogs,
    readingList: [],
    finishedList: []
}

function blogReducer(state = initialState, action) {
    switch(action.type) {
        case 'ADD_TO_READING_LIST': {
            const newState = {...state, readingList: [...state.readingList, action.payload] }
            return newState
        }
        case 'REMOVE_FROM_READING_LIST': {
            const newState = {...state, readingList: state.readingList.filter((book) => book.id !== action.payload )}
             
            return newState
        }
        default: 
          return state
    }
}

export default blogReducer;