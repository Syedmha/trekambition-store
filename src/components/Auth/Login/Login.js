import React from 'react'
import '../Login/Login.css'
import { Link } from "react-router-dom"


function Login() {
    return (
        <>
            <div className='login-form-container centered-flex-col-container'>
                <form className='login-form centered-flex-col-container'>
                    <div className='h3 bold-txt form-title'>
                        Login
                    </div>
                    <div className='form-input-field flex-col-container'>
                        <label className='input-label'>Email</label>
                        <input className='input input-primary' type='email' />
                    </div>
                    <div className='form-input-field flex-col-container'>
                        <label className='input-label'>Password</label>
                        <input className='input input-primary' type='email' />
                        <p className='forgot-pass-link'>Forgot Your Password?</p>
                    </div>
                    <div className='login-btn centered-flex-col-container'>
                        <button className='btn primary'>Login</button>
                    </div>
                    <Link to='/signup'><p>Create New Account {'>'}</p></Link>
                </form>
            </div>
        </>
    )
}

export default Login