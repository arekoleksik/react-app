import React, { Component } from 'react';
import '../../App.css';
import Header from '../../components/header/Header.component';
import Footer from '../../components/footer/Footer.component';
import Section from '../../components/section/Section.component';
import './About.component.css'


class About extends Component {
    render() {
        return (
            <div className="App">
                <Header name="About"/>
                <Section>
                    <span className="App-intro">
                        <div>
                            <span>About!</span>
                        </div>
                    </span>
                </Section>
                <Footer surname="MM"/>
            </div>
        );
    }
}

export default About;
