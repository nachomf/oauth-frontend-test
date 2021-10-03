import React from 'react';

export class AccountInformation extends React.Component {

    render() {
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
            </div>
        )
    }
}
