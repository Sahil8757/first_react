import React, { Component } from 'react';

export default class Country extends Component {
    constructor(props){
        super(props);

        this.state = {
            country: 'india'
        };
        
    }

    changeCountry = () => {
        this.setState({
            country: 'Canada'
        })
    }

    render() {
        return (
            <>
                <div>Country: {this.state.country}</div>
                <button onClick={() => this.changeCountry()}>Change</button>
            </>
        );
    }
}

// export default Country;