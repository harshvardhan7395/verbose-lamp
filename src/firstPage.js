import React from 'react';
import ReactDOM from 'react-dom';
import{BrowserRouter as Router, Route,Link} from 'react-router-dom';
import SecondPage from './secondPage';


export class FirstPage extends React.Component{
    constructor(props){
        super(props);
       var value = this.state = {  firstName:'',
                         lastName:'',
                         compName:'',
                         pNum:''};
        this.handleChange = this.handleChange.bind(this);
    }
   

    handlefNameChange=(event) => {
        this.setState({firstName:event.target.value});
    }

    
    handlelNameChange=(event) => {
        this.setState({lastName:event.target.value});
    }

    
    handlecNameChange=(event) => {
        this.setState({compName:event.target.value});
    }

    
    handlepNumChange=(event) => {
        this.setState({pNum:event.target.value});
    }
    render(){
        return(
                <div >
                <form class>
                    <label>First Name:</label>
                    <input type="text" value={this.state.firstName} onChange={this.handlefNameChange} />

                    <label>Last Name:</label>
                    <input type="text" value={this.state.lastName} onChange={this.handlelNameChange} />

                    <label>Company Name:</label>
                    <input type="text" value={this.state.compName} onChange={this.handlecNameChange} />

                    <label>Phone Number:</label>
                    <input type="numeric" value={this.state.pNum} onChange={this.handlepNumChange} />

                   <Route path="/secondPage" component={SecondPage}/> <button><Link tp="/secondPage">Next</Link></button>
                    </form>
                </div>
        );
    }
}
export default FirstPage; 