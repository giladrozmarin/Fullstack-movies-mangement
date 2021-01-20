import { Form } from '../Components/index'
import React, { useState } from 'react';
import {authentication} from '../utils/index'


export default function Login() {
    const [UserName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const isInvalid = password === '' | UserName === '';

    const handleSignin = (event) => {
        event.preventDefault();
        authentication(UserName,password)
    }
    return (

       
        <Form>
        <Form.Text>Login Page</Form.Text>
          <Form.Base onSubmit={handleSignin} method="POST">
            <Form.Input
                placeholder="User Name"
                value={UserName}
                onChange={({ target }) => setUserName(target.value)}
            />
            <Form.Input
                type="password"
                value={password}
                autoComplete="off"
                placeholder="Password"
               onChange={({ target }) => setPassword(target.value)}
            />
            <Form.Submit disabled={isInvalid} type="submit">
                        Sign In
            </Form.Submit>
            </Form.Base>
        </Form>
        
    )
}