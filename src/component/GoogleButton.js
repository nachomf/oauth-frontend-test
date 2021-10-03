import React from 'react';
import GoogleLogin from 'react-google-login';
import $ from 'jquery';

//const SERVER_URL = 'http://localhost:4568/check-token'
const SERVER_URL = 'https://webhook.site/66a593f6-d791-4a22-bbb9-43b3f4f59e98'

export class GoogleButton extends React.Component {

    responseSuccess(googleUser) {
        console.log(googleUser);
        let profile = googleUser.getBasicProfile();
        $("#email").text(() => profile.getEmail());
        $("#pic").attr("src", profile.getImageUrl());

        let idToken = googleUser.getAuthResponse().id_token;

        const requestOptions = {
            //mode: 'no-cors',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({ 'idToken': 'someToken'})
        };

        fetch(SERVER_URL, requestOptions)
            .catch(error => console.error('Error:', error))
            .then(function (response) {
                if (response !== undefined && response.ok) {
                    console.log('response success');
                    $("#id-checker").text('backend VERIFY');
                    $("#id-checker").toggleClass('alert-warning alert-success');

                } else {
                    console.log('response failed');
                }
            })
    }

    responseFailure(error) {
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
