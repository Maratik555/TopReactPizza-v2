import React, {useState} from 'react'
import './signIn.css'

const SignIn = ({active, setActive, setUser}: any) => {

    const [value, setValue] = useState('');
    const [value2, setValue2] = useState('');
    function welcome() {
        setUser(value);
        setActive(false)
    }

    return (
        <div className={active ? 'modal active' : 'modal' } onClick={() => setActive(false)}>
            <div className={active? 'modal__content active' : 'modal__content'} onClick={e => e.stopPropagation()}>
                <form action="">
                    <input type="text" value={value} placeholder='Login' onChange={(e) => setValue(e.target.value)}/>
                    <br/>
                    <br/>
                    <input type="password" value={value2}  placeholder='Password' onChange={(e) => setValue2(e.target.value)}
                    />
                </form>
                <br/>
                <button onClick={welcome} disabled={!value || !value2} >Sign In</button>
            </div>
        </div>
    )
};

export default SignIn
