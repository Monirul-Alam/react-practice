import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class  App extends Component {
  constructor() {
    super();
    
    this.state = {
      name: {firstname: 'Yihua', lastName : 'Zhang'}, 
      company : 'meta'
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
         <p>Hi {this.state.name.firstname} {this.state.name.lastName}, I work at {this.state.company} </p>
         <button 
         onClick={() => {
          this.setState({ name : {firstname:'Monirul', lastName: 'Alam' }
          
          });
          console.log(this.state);
         }}> change it</button>
        </header>
      </div>
    );

  }
  
}

export default App;
