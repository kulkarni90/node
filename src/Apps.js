import React, { Component } from 'react';
import Header from "./components/structure/Header"
import Content from "./components/structure/Content"
import Footer from "./components/structure/Footer"
import Resume from "./information.json"

class App extends Component {

  componentDidMount(){
    document.title = [
      Resume.basics.name,
      Resume.basics.label
    ].join(" | ")
  }

  render() {
    return (
      <div>
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;
