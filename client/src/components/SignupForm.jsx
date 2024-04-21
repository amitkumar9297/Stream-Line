import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const SignupForm = () => {
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({
        username: "",
        email: "",
        password: ""
    })
    const handleChange = (e) => {
        setInputs(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const { data } = await axios.post('http://localhost:8000/api/v1/user/register', { username: inputs.username, email: inputs.email, password: inputs.password })
            if (data.success) {
                // toast.success('User Register Successfully')
                navigate('/dashboard')
            }
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <div className="form-box register">
            <h2 className="id1">Signup</h2>
            <p classNmae="id" style={{ color: 'white' }}>Just some details to get you in..!</p>
            <form action="#">
                <div className="input-box">
                    <span className="icon"><ion-icon name="mail-outline"></ion-icon></span>
                    <input type="text" value={inputs.username} name='username' onChange={handleChange} required />
                    <label>Username</label>
                </div>
                <div className="input-box">
                    <span className="icon"><ion-icon name="mail-outline"></ion-icon></span>
                    <input type="text" value={inputs.email} name='email' onChange={handleChange} required />
                    <label>email</label>
                </div>

                <div className="input-box">
                    <span className="icon"> <ion-icon name="lock-closed-outline"></ion-icon>
                    </span>
                    <input type="password" value={inputs.password} name='password' onChange={handleChange} required />
                    <label>Password</label>
                </div>
                <div className="remeber-forgot">
                    <label className="id"><input type="checkbox" />I agree to the terms & conditions</label>
                    {/* <!-- <a href="#" class="forgot">Forgot Password?</a> --> */}
                </div>
                <button type="submit" className="btn" onClick={handleSubmit}><div className="abc">Signup</div></button>
                {/* <div className="login-register">
                    <p>Already have an account?<a href="#" class="login-link">Login</a></p>
                </div> */}
            </form>
        </div>

    )
}

export default SignupForm