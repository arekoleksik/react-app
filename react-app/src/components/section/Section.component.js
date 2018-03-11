import React, {PureComponent} from 'react';
import './Section.component.css'
import BottomSection from '../bottomSection/bottomSection.component'
import PropTypes from 'prop-types'

class Section extends PureComponent{
    static propTypes={
        BottomSectionVisability: PropTypes.bool.isRequired,
    };
    static defaultProps = {
        BottomSectionVisability: false
    };
    render(){
        return (
            <section>
                <div><a href="/">Home</a></div>
                <div><a href="/About">About</a></div>
                <div><a href="/Contact">Contact</a></div>
                {this.props.children}
                {this.props.BottomSectionVisability ? <BottomSection/> : ""}
            </section>
        )
    }
}

export default Section