import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import './Header.component.css';
import SubMenu from '../submenu/submenu.component.js'

class Header extends PureComponent {
    static propTypes = {
        name: PropTypes.string,
        submenuVisability: PropTypes.bool.isRequired,
    };
    static defaultProps = {
        version: "v 1.0.10",
        submenuVisability: false
    };

    state = {
        menuVis: false,
    };

    toggleMenuVis = () => {
        this.setState({
            menuVis: !this.state.menuVis,
        })
    };

    render() {
        return (
            <header>
                <div className="App">
                    <h2>Jesteś w {this.props.name}</h2>
                    <span>{this.props.version}</span>
                    <div>Tytuł</div>
                    <button onClick={()=>this.toggleMenuVis()}>MENU</button>
                    <SubMenu visability={this.state.menuVis} />
                </div>
            </header>
        );
    }
}

export default Header;
