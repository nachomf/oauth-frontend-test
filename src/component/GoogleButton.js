import React from 'react';
import GoogleLogin from 'react-google-login';
import $ from 'jquery';

export class GoogleButton extends React.Component {

    responseSuccess = (googleUser)=>{
        console.log(googleUser);
        let profile = googleUser.getBasicProfile();
        $("#email").text(() => profile.getEmail());
        $("#pic").attr("src", profile.getImageUrl());
    }

    responseFailure = (error) => {
        console.log(error)
    }

    render() {
        return (
            <GoogleLogin
                clientId="271583567975-4kue2iqgcr39pkclpt8ldq4fg6dcpffn.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={this.responseSuccess}
                onFailure={this.responseFailure}
                cookiePolicy={'single_host_origin'}
            />
        )
    }
}
