import React from 'react';

export class AccountInformation extends React.Component{

    render() {

        function signOut(){

        }

        return (
            <div className="data">
                <p>Profile Details</p>
                <img
                    id="pic"
                    className="image-circle"
                    width="100"
                    height="100"
                    alt={"empty"}
                />
                <p id="email" className="alert alert-danger">Empty data</p>
                <button onClick={signOut()} className="btn button-danger">Sign Out</button>
            </div>
        )
    }
}
