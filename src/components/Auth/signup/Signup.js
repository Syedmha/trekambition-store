import React from 'react'
import { Link } from "react-router-dom"
import '../signup/Signup.css'

export default function Signup() {
    return (
        <>
            <div className='signup-form-container centered-flex-col-container'>
                <form className='signup-form centered-flex-col-container'>
                    <div className='h3 bold-txt form-title'>
                        Signup
                    </div>
                    <div className='form-input-field flex-col-container'>
                        <label className='input-label'>Email</label>
                        <input className='input input-primary' type='email' />
                    </div>
                    <div className='form-input-field flex-col-container'>
                        <label className='input-label'>Password</label>
                        <input className='input input-primary' type='email' />
                    </div>
                    <div className='signup-btn centered-flex-col-container'>
                        <button className='btn primary'>Create New Account</button>
                    </div>
                    <Link to='/login'><p>Already Have An Account? {'>'}</p></Link>
                </form>
            </div>
        </>
    )
}
