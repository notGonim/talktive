import React from 'react'
import { Chat } from '../components/sidebar/chat/Chat'
import { Sidebar } from '../components/sidebar/Sidebar'
import '../styles/home.scss'
export const Home = () => {
    return (
        <div className="app">
            <div className="app__body">
                <Sidebar />
                <Chat />

            </div>
        </div>
    )
}
