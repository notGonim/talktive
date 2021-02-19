import { Avatar } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import db from '../../firebase'
import '../../styles/sidebarChat.scss'

export const SidebarChat = ({ addNewChat, id, name }) => {

    const [seed, setSeed] = useState('')


    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000))
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
        <div className="sidebarChat">
            <Avatar src={`https://avatars.dicebear.com/api/human/:${seed}.svg`} />
            <div className="sidebarChat__info">
                <h2>{name}</h2>
                <p>Last message...</p>
            </div>
        </div>
    ) : (
            <div onClick={createChat} className="sidebarChat">
                <h2>add new chat</h2>
            </div>
        );
}







