import React from 'react';
import PropTypes from 'prop-types';
import './Footer.component.css';

const Footer = (props) =>(
    <footer> <div>{props.name} {props.surname}</div>
    {props.copyright}</footer>

);

Footer.propTypes ={
    name: PropTypes.string,
    surname: PropTypes.string,
    copyright: PropTypes.string.isRequired,
};

Footer.defaultProps = {
    name: 'jestem defaultname',
    surname: 'jestem defaultsurname',
    copyright: 'Prawo autorskie'
};

export default Footer;