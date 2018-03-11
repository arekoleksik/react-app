import React, { Component } from 'react';
import '../../App.css';
import Header from '../../components/header/Header.component'
import Footer from '../../components/footer/Footer.component'
import Section from '../../components/section/Section.component'
import './Home.component.css'

class Home extends Component {
  render() {
    return (
      <div className="App">
          <Header submenuVisability={true} name="Aplikacja React"/>
          <Section BottomSectionVisability={true}>
              <p className="App-intro">
                  To get started, edit <code>src/App.js</code> and save to reload.
              </p>
          </Section>
          <Footer surname="MM"/>
      </div>
    );
  }
}

export default Home;
