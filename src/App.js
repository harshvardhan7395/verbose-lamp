import React from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import SecondPage from './secondPage.js';
import{BrowserRouter as Router, Switch,Route,Link} from 'react-router-dom';


 class App extends React.Component {
  constructor(props){
    super(props);
   this.state = {  firstName:'',
                     lastName:'',
                     compName:'',
                     pNum:''};
    this.handlefNameChange = this.handlefNameChange.bind(this);
    this.handlelNameChange = this.handlelNameChange.bind(this);
    this.handlecNameChange = this.handlecNameChange.bind(this);
    this.handlepNumChange = this.handlepNumChange.bind(this);
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
      <div>
         <div className="header" ><h2 >LOGIN DETAILS</h2></div>
         <div className="App">
      <form >
          <table>
            <tr>
          <td><label>First Name:</label></td>
          <td><input type="text" value={this.state.firstName} onChange={this.handlefNameChange} /></td>
            </tr>
            <br/>
            <tr>
          <td><label>Last Name:</label></td>
          <td><input type="text" value={this.state.lastName} onChange={this.handlelNameChange} /></td>
          </tr>
          <br/>
          <tr>
          <td><label>Company Name:</label></td>
          <td><input type="text" value={this.state.compName} onChange={this.handlecNameChange} /></td>
          </tr>
          <br/>
          <tr>
          <td><label>Phone Number:</label></td>
          <td><input type="numeric" value={this.state.pNum} onChange={this.handlepNumChange} /></td>
          </tr>
          <br/>
          <tr>
            <td></td>
            <td>
        <Router><button  onClick={this.handleNext}><Link to="/secondPage" >Next</Link></button>
       <Switch> <Route path="/secondPage"><SecondPage firstName={this.state.firstName} lastName={this.state.lastName} compName={this.state.compName} pNum={this.state.pNum}/></Route></Switch></Router>
          </td>
          </tr>
          </table>
          </form>
          </div>
      </div>

     

    );
  }
}



export default App;

