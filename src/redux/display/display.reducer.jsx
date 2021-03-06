// display.reducer.js

const INITIAL_STATE = {
    backgroundColor: 'lightblue',
    frameColor: 'hotpink'
}

const displayReducer = (state = INITIAL_STATE, action) => {
    
    switch (action.type) {
        case 'SET_HTML_BACKGROUND_COLOR':
            return {
                ...state, 
                backgroundColor: action.payload
            }
        case 'SET_FRAME_BACKGROUND_COLOR':
            return {
                ...state, 
                frameColor: action.payload
            }
        default:
            return state;
    }

}

export default displayReducer

// END of document
