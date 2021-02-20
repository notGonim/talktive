import { Button } from '@material-ui/core'
import React from 'react'
import { userAction } from '../../Context/user-reducer'
import { useStateValue } from '../../Context/UserProvider'
import { auth, provider } from '../../firebase'
import '../../styles/login.scss'

export const Login = () => {

    const [{ }, dispatch] = useStateValue()


    const signIn = () => {
        auth.signInWithPopup(provider)
            .then(res => {
                dispatch({
                    type: userAction.SET_USER,
                    user: res.user
                })
            })
            .catch(e => alert(e.message))
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
