import { connect } from "react-redux";
import Todo from "./Todo";
import { updateNoteAC, addNoteAC, removeNotesAC, changeThAC, isDoneAC, removeNoteAC } from './../redux/mainReducer'

let mapStateToProps = (state) => {
    return {
        notes: state.main.notes,
        note: state.main.newMess,
        theme: state.main.theme
    }
}


let mapDispatchToProps = (dispatch) => {
    return {
        updateNote: (mess) => {
            dispatch(updateNoteAC(mess))
        },
        addPost: () => {
            dispatch(addNoteAC())
        },
        clearList: () => {
            dispatch(removeNotesAC())
        },
        changeTheme: () => {
            dispatch(changeThAC())
        },
        isDone: (id) => {
            dispatch(isDoneAC(id))
        },
        removeNote: (id) => {
            dispatch(removeNoteAC(id))
        }
    }
}

const TodoContainer = connect(mapStateToProps, mapDispatchToProps)(Todo)

export default TodoContainer