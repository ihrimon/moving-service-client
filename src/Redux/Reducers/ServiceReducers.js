import services from './services.json'
    const initialState = {
    discover: services,
    readingList: [],
    finishedList: []
}

function ServiceReducer(state = initialState, action) {
    switch(action.type) {
        case 'ADD_TO_READING_LIST': {
            const newState = {...state, readingList: [...state.readingList, action.payload] }
            return newState
        }
        case 'REMOVE_FROM_READING_LIST': {
            const newState = {...state, readingList: state.readingList.filter((service) => service.id !== action.payload )}
             
            return newState
        }
        default: 
          return state
    }
}

export default ServiceReducer;