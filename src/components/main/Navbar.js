import React from 'react'
import Radium from 'radium'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

const styles = {
    transparentStyle: {
        boxShadow: '0 0 black'
    },
    logoStyle: {
        fontSize: 25,
    },
    transparentLogoStyle: {
        filter: 'brightness(0) invert(1)'
    },
    logInButton: {
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        borderColor: 'rgba(255, 255, 255, 0.4)',
        width: '7em',
        color: 'white',
        ':hover': {
            backgroundColor: 'rgba(255, 255, 255, 1)',
            color: '#7973AA'
        }
    }
};

const Navbar = Radium(({ transparent, hasShadow, logInClicked }) => <header
    className={`nav ${hasShadow ? 'has-shadow' : ''}`}
    style={transparent && !hasShadow ? styles.transparentStyle : {}}>
    <div className="container">
        <div className="nav-left">
            <span
                className='nav-item'
                style={[styles.logoStyle, transparent ? styles.transparentLogoStyle : {}]}
                role="img"
                aria-label="mockingbird">
                &#128038;
            </span>
        </div>
        <div className="nav-right">
            <NavLink activeClassName="is-active" to="/signup" className="nav-item">Sign Up</NavLink>
            <div className="nav-item">
                <a onClick={logInClicked} style={styles.logInButton} className="button">Log In</a>
            </div>
        </div>
    </div>
</header>);

Navbar.propTypes = {
    transparent: PropTypes.bool,
    hasShadow: PropTypes.bool,
    logInClicked: PropTypes.func.isRequired
};

export default Navbar;