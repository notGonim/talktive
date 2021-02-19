import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import { Chat } from '../components/chat/Chat'
import { Sidebar } from '../components/sidebar/Sidebar'
import '../styles/home.scss'
export const Home = () => {
    return (
        <div className="app">
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
        </div>
    )
}
