import React from 'react';
import ReactDOM from 'react-dom';
import{rourter} from 'react-router';


class SecondPage extends React.Component{
    constructor(props){
        super(props);
         this.state = { userName:'',
                         password:'',
                         };
        this.handleuNameChange = this.handleuNameChange.bind(this);
        this.handlepassChange = this.handlepassChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
   handleSubmit(event){
        alert("The details entered are:- First Name:  "+this.props.firstName+"\nLast Name:  "+this.props.lastName+"\nCompany Name:  "+this.props.compName+"\nPhone Number:  "+this.props.pNum+"\nUser Name:  "+this.state.userName+"\nPassword:  "+this.state.password);
   }

   
   handlepassChange=(event) =>{
    this.setState({password:event.target.value});
}
handleuNameChange=(event) =>{
    this.setState({userName:event.target.value});
}
    render(){
        return(
                <div className="App1">
                <form>
                    <table>
                    <tr>
                    <td><label>User Name:</label></td>
                    <td><input type="text" value={this.state.userName} onChange={this.handleuNameChange} /></td>
                    </tr>
                    <br/>
                    <tr>
                    <td><label>Password:</label></td>
                    <td><input type="password" value={this.state.password} onChange={this.handlepassChange} /></td>
                    </tr>
                    <br/>
                    <tr>
                    <td></td>
                    <td><button onClick={this.handleSubmit}>Submit</button></td>
                    </tr>
                    </table>
                    </form>
                </div>
        );
    }
}
export default SecondPage;