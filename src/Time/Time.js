import React, { Component } from 'react';

class Time extends Component {
    constructor(props){
        super(props);

        this.state = {
            Time : new Date()
         }
    }

    tick =() =>{
        this.setState({
            Time : new Date()
        })
    }

    componentDidMount = () =>{
        //3.Use this method for request date to server
        this.TimeId = setInterval(() => this.tick(),1000);
    }

    componentDidUpdate = (prevprops,prevstate) =>{
        if(prevstate.Time !== this.state.Time){

            //4. call componentDidUpdate when previous state and current state is nbot same

            console.log("componentDidUpdate called")
        }
    }

    componentWillUnmount = () => {
        //5. componentWillUnmount used to release resources from component
        clearInterval(this.TimeId);
    }

    render() {
        //2. Call render method each time when state value change
        return (
            <div>
                {this.state.Time.toLocaleString()}
            </div>
        );
    }
}

export default Time;