import React from 'react'

const LoginForm = () => {
    return (
        <div className="form-box login">
            <h2 className="id">Login</h2>
            <form action="#">
                <div className="input-box">
                    <span className="icon"><ion-icon name="mail-outline"></ion-icon></span>
                    <input type="email" required />
                    <label>Email</label>
                </div>

                <div className="input-box">
                    <span className="icon"> <ion-icon name="lock-closed-outline"></ion-icon>
                    </span>
                    <input type="password" required />
                    <label>Password</label>
                </div>
                <div className="remeber-forgot">
                    <label className="id"><input type="checkbox" />Remember me</label>
                    <a href="#" className="forgot">Forgot Password?</a>
                </div>
                <button type="submit" className="btn"><div class="abc">Login</div></button>
                {/* <div className="login-register">
                    <p>Don't have an account?<a href="#" className="register-link">Signup</a></p>
                </div> */}
            </form>
        </div>

    )
}

export default LoginForm