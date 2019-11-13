import React from 'react';
export function Login() {
    return (
        <div id='Login'>
            <div>
                <div className='login_wrapper'>
                    <p> username </p>
                    <input className='input_text' type="text" name="username" />
                </div>
                <div className='login_wrapper'>
                    <p> password </p>
                    <input className='input_text' type="password" name="username" />
                </div>
                <div className='login_wrapper'>
                    <button className='button_des'> login </button>
                </div>
            </div>
        </div>
    );
}
export default Login;