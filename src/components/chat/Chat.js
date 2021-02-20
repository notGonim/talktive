import { Avatar, IconButton } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import '../../styles/chat.scss'
import SearchIcon from '@material-ui/icons/Search';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import { useParams } from 'react-router';
import db from '../../firebase';
import firebase from 'firebase';
import { useStateValue } from '../../Context/UserProvider';

export const Chat = () => {

    const [{ user }, dispatch] = useStateValue()
    const [seeds, setSeeds] = useState('')
    const [input, setInput] = useState('')
    const { roomId } = useParams()
    const [roomName, setRoomName] = useState('')
    const [messages, setMessages] = useState([])
    useEffect(() => {
        if (roomId) {
            db.collection('rooms').doc(roomId).onSnapshot(snap => {
                setRoomName(snap.data().room)
            })
            db.collection('rooms')
                .doc(roomId)
                .collection('messages')
                .orderBy('timestamp', 'asc')
                .onSnapshot(snap => (
                    setMessages(snap.docs.map(doc => doc.data()))
                ))
        }
    }, [roomId])

    useEffect(() => {
        setSeeds((Math.floor(Math.random() * 5000)))
    }, [])

    const sendMessage = (e) => {
        e.preventDefault()
        db.collection('rooms')
            .doc(roomId)
            .collection('messages')
            .add({
                message: input,
                name: user.displayName,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            })
        setInput("")

    }
    return (
        <div className="chatContainer">
            <div className="chat__header">
                <Avatar src={`https://avatars.dicebear.com/api/human/:${seeds}.svg`} />
                <div className="chat__headerInfo">
                    <h3>{roomName}</h3>
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
                {messages.map((msg) => (
                    <p className={`chat__message ${true && ' chat__reciver'}`}>
                        <span className="chat__name">{msg.name}</span>
                        {msg.message}
                        <span className="chat__timestamp">
                            {new Date(msg.timestamp?.toDate()).toUTCString()}
                        </span>
                    </p>
                ))}

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
