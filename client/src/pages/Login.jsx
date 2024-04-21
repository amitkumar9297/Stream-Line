import React, { useState } from 'react'
import Navigation from '../components/Navigation'
import LoginForm from '../components/LoginForm'
import SignupForm from '../components/SignupForm'

const Login = () => {
    const [login, setLogin] = useState(true);
    return (
        <>
            <Navigation />
            {
                login ? (
                    <>
                        <LoginForm />
                        <div className="login-register">
                            <p>Don't have an account?<div onClick={() => setLogin(!login)}><p style={{ cursor: "pointer" }}>SignUp</p></div></p>
                        </div>

                    </>
                ) : (<><SignupForm /><div className="login-register">
                    <p>Already have an account?<div onClick={() => setLogin(!login)}><p>Login</p></div></p>
                </div></>)
            }
            {/* <LoginForm /> */}
            {/* <SignupForm /> */}

        </>
    )
}

export default Login