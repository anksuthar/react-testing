import React from 'react'

class UncontrolledComp extends React.Component {
    constructor(props){
        super(props);
        this.submitEvent = this.submitEvent.bind(this);  
        this.input = React.createRef();
    }

    submitEvent(event){
        alert('You have entered the UserName and CompanyName successfully.');
        console.log(event);
        console.log(this._name.value);
        console.log(this._companyName.value);        
        event.preventDefault();  
    }

    render() {
        return (
            <div>
                <form onSubmit={this.submitEvent}>  
                    <h2>Creating Form using Uncontrolled component</h2>
                    <label>Name: 
                    <input name="Name" type='text' ref={
                        (input) => { return this._name = input} 
                    } /></label>
                    <label>CompanyName: <input name="CompanyName" type='text' ref={
                        (input) => { return this._companyName = input} 
                    } /></label>  
                    <input type="submit" value="Submit" />
                </form>  
            </div>
        );
    }
}

export default UncontrolledComp

