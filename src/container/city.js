import React, { Component } from 'react';

export default class City extends Component {
    constructor(props){
        super(props);

        this.state = {
            city: 'Surat'
        };
        
    }

    changeCity = () => {
        this.setState({
            city: 'Mumbai'
        })
    }

    render() {
        return (
            <>
                <div>City: {this.state.city}</div>
                <button onClick={() => this.changeCity()}>Change</button>
            </>
        );
    }
}
