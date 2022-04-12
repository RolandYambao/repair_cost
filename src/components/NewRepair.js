import React, { Component } from 'react';

class NewRepair extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="column is-4">
                <div className="card large">
                        <p>{this.props.estimateName}</p>
                </div>
            </div>
        );
    }
}

export default NewRepair;