import React from 'react'

export default function Note({ mess, isdone, fDone, id, fRemove }) {

    let done = () => fDone(id)
    let remove = () => fRemove(id)

    return (
        <div className="note">
            <div onClick={done}  className={`button_done ${isdone ? 'done' : null}`}>
                {isdone ? 'Done' : 'Do it !'}
            </div>
            <div  className="text_note">
                {mess}
            </div>
            <div onClick={remove} className="remove">
                x
            </div>
        </div>
    )
}
