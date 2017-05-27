import React from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import { StyleSheet, css } from 'aphrodite'

const styles = StyleSheet.create({
    transparentStyle: {
        boxShadow: '0 0 black'
    },
    logoStyle: {
        fontSize: 25,
    },
    transparentLogoStyle: {
        filter: 'brightness(0) invert(1)'
    }
});

const Navbar = ({ transparent, hasShadow }) => <header
    className={`nav ${hasShadow ? 'has-shadow' : ''} ${css(transparent && !hasShadow ? styles.transparentStyle : '')}`}>
    <div className="container">
        <div className="nav-left">
            <span
                className={`nav-item ${css(transparent ? [styles.transparentLogoStyle, styles.logoStyle] : styles.logoStyle)}`}
                role="img"
                aria-label="mockingbird">
                &#128038;
            </span>
        </div>
        <div className="nav-right">
            <NavLink activeClassName="is-active" to="/signup" className="nav-item">Sign Up</NavLink>
            <NavLink activeClassName="is-active" to={{
                pathname: "/login",
                state: {
                    modal: true,
                    callBackRoute: "/"
                }
            }} className="nav-item">Login</NavLink>
        </div>
    </div>
</header>;

Navbar.propTypes = {
    transparent: PropTypes.bool,
    hasShadow: PropTypes.bool
};

export default Navbar;