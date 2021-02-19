import { Avatar, IconButton } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import './chat.scss'
import SearchIcon from '@material-ui/icons/Search';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';

export const Chat = () => {

    const [seeds, setSeeds] = useState('')
    const [input, setInput] = useState('')

    useEffect(() => {
        setSeeds((Math.floor(Math.random() * 5000)))
    }, [])
    const sendMessage = () => {
        e.preventDefault()
    }
    return (
        <div className="chatContainer">
            <div className="chat__header">
                <Avatar src={`https://avatars.dicebear.com/api/human/:${seeds}.svg`} />
                <div className="chat__headerInfo">
                    <h3>Room name</h3>
                    <p>Last seen at ...</p>
                </div>
                <div className="chat__chatHeaderRight">
                    <IconButton>
                        <SearchIcon />
                    </IconButton>
                    <IconButton>
                        <AttachFileIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>
            <div className="chat__body">
                <p className={`chat__message ${true && ' chat__reciver'}`}>
                    <span className="chat__name">XXXX</span>
                hey guys
            <span className="chat__timestamp">
                        3:52pm
            </span>
                </p>
            </div>
            <div className="chat__footer">
                <InsertEmoticonIcon />
                <form>
                    <input type="text" placeholder="Type a message"
                        value={input} onChange={(e) => setInput(e.target.value)} />
                    <button type="submit" onClick={sendMessage}>Send a message</button>
                </form>
                <MicIcon />
            </div>
        </div>
    )
}
