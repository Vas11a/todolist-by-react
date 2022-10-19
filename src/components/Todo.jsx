import React from 'react'
import './todo.scss'
import gitHub from './../imgs/github.png'
import Note from './Note'

export default function Todo({ notes, note, updateNote, addPost, clearList, changeTheme, theme, isDone, removeNote }) {
    let text = React.createRef();
    
    let changeNote = () => {
        let mess = text.current.value;
        updateNote(mess)
    }

    let addNote = () => {
        if (text.current.value.replace(/ /g, '') === '') return
        addPost()
    }

    let removeNotes = () => clearList()

    let changeColor = () => changeTheme()

    let fDone = (id) => isDone(id)
    let fRemove = (id) => removeNote(id)

    return (
        <div className={`container ${theme ? 'white' : 'dark'}`}>
            <div className="head">
                <h1 className="title">To Do List</h1>
                <div className="gh_block">
                    <a target='_blanc' href='https://github.com/Vas11a'><img src={gitHub} alt="gh" /></a>
                </div>
            </div>

            <div className="main_block">
                <div className="left_part">
                    <div className="w_note">Write note</div>
                    <textarea onChange={changeNote} ref={text} value={note} placeholder='Enter something!'></textarea>
                    <div onClick={addNote} className="button">Add note</div>
                    <div onClick={removeNotes} className="button">Clear List</div>

                    <div onClick={changeColor} className="button_theme">{theme ? 'D' : 'W'}</div>
                </div>

                <div className="right_part">
                    <h3 className='note_title'>Your notes</h3>
                    <div className={`no_notes  ${notes.length === 0 ? null : 'none'}`}>No notes now</div>

                    <div className="note_block">

                        {
                            notes.map((el, idx) => {
                                return (
                                    <Note fRemove={fRemove} fDone={fDone} id={idx} key={idx} mess={el.message} isdone={el.isDone} />
                                )
                            })
                        }

                    </div>


                </div>
            </div>

        </div>
    )
}
