import React, { Component } from "react";
import io from 'socket.io-client';
class App extends Component{
    constructor(props) {
        super(props);
    }

    componentWillUnmount() {
        this.socket.close()
    }

    componentDidMount(){
        this.socket = io.connect("http://localhost:5000", {
            reconnection: true,
        })
        console.log('se conecta');
        this.socket.on("responseMessage", message => {
            console.log("este es el mensaje-->",message);
        })
    }

    render(){
        return(
            <div>
                <h1>
                    Cliente socket
                </h1>
            </div>
        )
    }
}

export default App;
