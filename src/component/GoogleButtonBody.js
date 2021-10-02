import React from 'react';
import GoogleButton from 'react-google-button';

export class GoogleButtonBody extends React.Component {

    /*componentDidMount() {
        window.gapi.load('auth2', function () {
            window.gapi.auth2.init();
        });
    }*/

    onSignIn(){
        console.log('Google button clicked')
    }

    render() {
        return <GoogleButton className="google-button g-signin2" data-onsuccess={this.onSignIn}/>
        //return <div className="g-signin2" data-onsuccess="onSignIn"></div>
    }
}
