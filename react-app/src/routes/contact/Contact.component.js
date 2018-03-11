import React, { Component } from 'react';
import '../../App.css';
import Header from '../../components/header/Header.component'
import Footer from '../../components/footer/Footer.component'
import Section from '../../components/section/Section.component'
import './Contact.component.css'

class Contact extends Component {
    render() {
        return (
            <div className="App">
                <Header name="Contact"/>
                <Section>
                    <span className="App-intro">
                        <div>
                            <span>Contact!</span>
                        </div>
                    </span>
                </Section>
                <Footer surname="MM"/>
            </div>
        );
    }
}

export default Contact;
