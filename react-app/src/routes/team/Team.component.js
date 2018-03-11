import React, {PureComponent} from 'react';
import Header from '../../components/header/Header.component'
import Footer from '../../components/footer/Footer.component'
import Section from '../../components/section/Section.component'

class Team extends PureComponent {
    render() {
        return (
            <div className="App">
                <Header name="Contact"/>
                <Section>
                    <span className="App-intro">
                        <div>
                            <span>Team!</span>
                        </div>
                    </span>
                </Section>
                <Footer surname="MM"/>
            </div>
        );
    }
}

export default Team;