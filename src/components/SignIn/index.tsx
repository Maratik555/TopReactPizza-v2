import React from 'react'
import './signIn.css'

const SignIn = ({active, setActive,}: any) => {

    function welcome() {
        alert('Welcome')
    }

    return (
        <div className={active ? 'modal active' : 'modal' } onClick={() => setActive(false)}>
            <div className={active? 'modal__content active' : 'modal__content'} onClick={e => e.stopPropagation()}>
                <form action="">
                    <input type="text" placeholder='Email'/>
                    <br/>
                    <br/>
                    <input type="password" placeholder='Password'/>
                </form>
                <br/>
                <button onClick={welcome}>Sign In</button>
            </div>
        </div>
    )
}

export default SignIn
