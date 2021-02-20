import { Avatar, IconButton } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import '../../styles/sidebar.scss'
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import { SidebarChat } from './SidebarChat';
import db from '../../firebase';
import { useStateValue } from '../../Context/UserProvider';

export const Sidebar = () => {
    const [rooms, setRooms] = useState([])
    const [{ user }, dispatch] = useStateValue()
    console.log(user)

    useEffect(() => {
        const unsubscribe = db.collection('rooms').onSnapshot(snap => (
            setRooms(snap.docs.map(doc => (
                {
                    id: doc.id,
                    data: doc.data()
                }
            )))
        ))
        return () => {
            unsubscribe()
        }
    }, [])
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <Avatar src={user?.photoURL} />
                <div className="sidebar__headerRight">
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>
            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                    <SearchOutlinedIcon />
                    <input type="text" placeholder="Search or start new chat" />
                </div>
            </div>
            <div className="sidebar__chats">
                <SidebarChat addNewChat />
                {rooms.map(room => (
                    <SidebarChat key={room.id} id={room.id} name={room.data.room} />
                ))}
            </div>
        </div>
    )
}
