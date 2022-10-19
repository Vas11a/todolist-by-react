

const UPDATE_NOTE_AC ='UPDATE_NOTE_AC'
const ADD_NOTE_AC = 'ADD_NOTE_AC'
const REMOVE_NOTES_AC = 'REMOVE_NOTES_AC'
const CHANGE_TH_AC = 'CHANGE_TH_AC'
const IS_DONE_AC = 'IS_DONE_AC'
const REMOVE_NOTE_AC = 'REMOVE_NOTE_AC'

let initialState = {
    notes: [],
    newMess: '',
    theme: false,
}

export const mainReducer = (state = initialState, action) => {
    let notesCopy = JSON.parse(JSON.stringify(state.notes))
    switch (action.type) {
        case UPDATE_NOTE_AC:
            return{
                ...state,
                newMess: action.mess
            }
        case ADD_NOTE_AC:
            return{
                ...state,
                notes: [{message: state.newMess, isDone: false }, ...state.notes],
                newMess: ''
            } 

        case REMOVE_NOTES_AC: 
            return{
                ...state,
                notes: []
            }
        case CHANGE_TH_AC:
            return {
                ...state,
                theme: state.theme ? false : true
            } 
        case IS_DONE_AC:
            
            if (notesCopy[action.id].isDone === false) {
                notesCopy[action.id].isDone = true
            } else {
                notesCopy[action.id].isDone = false
            }
            return {
                ...state,
                notes: notesCopy
            }
        case REMOVE_NOTE_AC:
            notesCopy.splice(action.id, 1)
            return{
                ...state,
                notes: notesCopy
            }
    
        default:
            return state;
    }
}


export const updateNoteAC = (mess) => {
    return {
        type: UPDATE_NOTE_AC,
        mess
    }
}

export const addNoteAC = () => ({type: ADD_NOTE_AC})
export const removeNotesAC = () => ({ type: REMOVE_NOTES_AC })
export const changeThAC = () => ({ type: CHANGE_TH_AC })
export const isDoneAC = (id) => { 
    return{
        type: IS_DONE_AC,
        id
    } 
}
export const removeNoteAC = (id) => {
    return {
        type: REMOVE_NOTE_AC,
        id
    }
}