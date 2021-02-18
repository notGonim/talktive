import { Avatar } from '@material-ui/core'
import React, { useState } from 'react'
import './chat.scss'

export const Chat = () => {

    const [seeds, setSeeds] = useState('')

    return (
        <div className="chatContainer">
            <div className="chat__header">
                <Avatar />
            </div>
            <div className="chat__body">

            </div>
            <div className="chat__footer">

            </div>
        </div>
    )
}
