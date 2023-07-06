import React, { Component } from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

export class App extends Component {
  actors = [
    'Tom Hanks',
    'Robin Wright',
    'Gary Sinise',
    'Mykelti Williamson',
    'Sally Field',
  ];
  render() {
    return (
      <div className="App">
        <Header />
        <Main actors={this.actors}/>
        <Footer />
      </div>
    );
  }
}

export default App;
