import { SettingsInputSvideoRounded } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components';
import {auth, provider} from './firebase';


const Login = ({setUser}) => {

    const signIn = () => {
        auth.signInWithPopup(provider).then((result) => {
            let user = result.user;
            let newUser = {
                name: user.displayName,
                email: user.email,
                photo: user.photoURL
            }
            localStorage.setItem('user', JSON.stringify(newUser));
            setUser(newUser);
        }).catch((err) => {
            alert(err.message);
        });       
    }

    return (
        <Container>
            <Content>
                <AmazonLogo src="https://www.registrarcorp.com/wp-content/uploads/2021/02/Amazon-logo.png"/>
                <h1>Sign into Amazon</h1>
                <LoginButton 
                    onClick={signIn}
                >
                    Sign in with Google
                </LoginButton>
            </Content>
        </Container>
    )
}

export default Login

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #f8f8f8;
    display:grid;
    place-items:center;
`

const Content = styled.div`
    padding: 100px;
    background-color: white;
    border-radius: 5px;
    box-shadow: 0 1px 3px gray;
    text-align:center;
`

const AmazonLogo = styled.img`
    height: 100px;
    margin-bottom: 40px;
`

const LoginButton = styled.button`
    margin-top: 50px;
    background-color: #f0c14b;
    height: 40px;
    border-radius: 4px;
    border: 2px solid #a88734;
    padding: 4px 8px;
    cursor: pointer;
`