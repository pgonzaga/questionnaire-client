import React, {Component} from 'react';
import logo from '../logo_toolbox.jpg';
import PhraseForm from './PhraseForm';
import PhraseAlert from './PhraseAlert';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-light bg-light">
          <img src={logo} className="navbar-brand" alt="logo"/>
        </nav>
        <div className="container">
          <PhraseForm/>
          <PhraseAlert/>
        </div>
      </div>
    );
  }
}

export default App;
