import "../styles.css";
import React, {Component} from 'react';
import Header from './header/header.jsx';
import Footer from './footer/footer.jsx';
import Main from './main/main.jsx';

class App extends Component{
  render(){
  return (
    <div className="App">
      <Header title="Photo wall"/>
      <Main />
      <Footer description="Crazycoders@2022"/>
    </div>
  )
  }
}

export default App;
