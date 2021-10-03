import React from 'react';
import GoogleLogin from 'react-google-login';

export class GoogleButton extends React.Component {

    responseGoogle = (response)=>{
        console.log(response);
    }

    render() {
        return (
            <GoogleLogin
                clientId="271583567975-4kue2iqgcr39pkclpt8ldq4fg6dcpffn.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={this.responseGoogle}
                onFailure={this.responseGoogle}
                cookiePolicy={'single_host_origin'}
            />
        )
    }
}
