import React from 'react'
import ReactDOM from 'react-dom';


class Contact extends React.Component {
    constructor(props){
        super(props);  
        this.state = {  
             data: 'ankit suthar'  
        } 
        //this.buttonclickEvent = this.buttonclickEvent.bind(this);
        //this.textboxChanveEvent = this.textboxChanveEvent.bind(this);
    }

    buttonclickEvent = () =>{
        var textbox1 = document.getElementById('textbox1'); 
        var textbox1val =  ReactDOM.findDOMNode(textbox1).value;
        this.setState(
            { data: textbox1val }
        );
    }

    textboxChanveEvent = (event) =>{
        this.setState(
            { data: event.target.value }
        );
    }

    render() {
        return (
            <div>
                <h2>Topics {this.state.data}</h2>
                <input type='text' id='textbox1' /> 
                <button onClick={this.buttonclickEvent}>Please Click</button>
            </div>
        );
    }
}

export default Contact

