import React, {PureComponent} from 'react';
import './submenu.component.css'


class SubMenu extends PureComponent {

    render() {
        return (
            <nav className={this.props.visability ? 'active' : 'hide'}>
                <a href="/">Homepage</a>
                <a href="/About">About</a>
                <a href="/Contact">Contact</a>
                <a href="/Api">Api</a>
            </nav>
        );
    }
}

export default SubMenu;