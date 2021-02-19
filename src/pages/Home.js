import React, { useState } from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import { Login } from '../components/auth/Login'
import { Chat } from '../components/chat/Chat'
import { Sidebar } from '../components/sidebar/Sidebar'
import '../styles/home.scss'
export const Home = () => {
    const [user, setUser] = useState(null)
    return (
        <div className="app">


            {!user ?
                (
                    <Login />)
                :
                (
                    <div className="app__body">
                        <Router>
                            <Sidebar />
                            <Switch>
                                <Route path='/rooms/:roomId'>
                                    <Chat />
                                </Route>
                                <Route path="/">
                                    <Chat />
                                </Route>
                            </Switch>
                        </Router>

                    </div>
                )}
        </div>

    )
}
