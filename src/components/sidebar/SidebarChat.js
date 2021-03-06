import { Avatar } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import db from '../../firebase'
import '../../styles/sidebarChat.scss'

export const SidebarChat = ({ addNewChat, id, name }) => {

    const [seed, setSeed] = useState('')
    const [message, setMessage] = useState([])

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000))
    }, [])
    useEffect(() => {
        db
            .collection('rooms')
            .doc(id)
            .collection('messages')
            .orderBy('timestamp', 'asc')
            .onSnapshot(snap => (
                setMessage(snap.docs.map(doc => doc.data()))
            ))
    }, [])
    const createChat = () => {
        const roomName = prompt('Please enter name for chat room')
        if (roomName) {
            //connect to databases and add room to the firebase databases 
            db.collection('rooms').add({
                room: roomName,
            })
        }
    }

    return !addNewChat ? (
        <Link to={`/rooms/${id}`}>
            <div className="sidebarChat">
                <Avatar src={`https://avatars.dicebear.com/api/human/:${seed}.svg`} />
                <div className="sidebarChat__info">
                    <h2>{name}</h2>
                    <p>{new Date(message[message.length - 1]?.timestamp?.toDate()).toUTCString()}</p>
                </div>
            </div>
        </Link>
    ) : (
            <div onClick={createChat} className="sidebarChat">
                <h2>add new chat</h2>
            </div>
        );
}







