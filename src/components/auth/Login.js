import { Button } from '@material-ui/core'
import React from 'react'
import '../../styles/login.scss'

export const Login = () => {


    const signIn = () => {

    }
    return (
        <div className="login">
            <div className="login__container">
                <img src="https://cdn2.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-whatsapp-circle-512.png"
                    alt="" srcset="" />
                <div className="login__text">
                    <h1>Sign in to WhatsApp</h1>
                </div>
                <Button onClick={signIn}>Sign in to whatsApp</Button>
            </div>

        </div>
    )
}
