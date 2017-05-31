import React from 'react'
import Radium from 'radium'
import { NavLink } from 'react-router-dom'

const styles = {
    invertIcon: {
        filter: 'brightness(0) invert(1)',
        fontSize: 18
    },
    backGradient: {
        background: 'linear-gradient(to right, #40405c 0%,#6f71aa 80%,#8a76ab 100%)'
    },
    flexboxCenter: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
}

const Navbar = () =>
    <nav
        className="nav has-shadow is-primary is-dark"
        style={styles.backGradient}
        data-signup-navbar>
        <div className="nav-left"></div>
        <div
            className="nav-center"
            style={styles.flexboxCenter}>
            <span
                className="icon nav-item"
                style={styles.invertIcon}>
                &#128038;
        </span>
        </div>
        <div className="nav-right">
            <a
                style={{
                    color: 'rgba(245, 245, 245, 0.7)',
                    ':hover': {
                        color: "#f5f5f5"
                    },
                    paddingRight: 30
                }}
                className="nav-item" to="/">
                Have an account? Log in.
            </a>
        </div>
    </nav>;

export default Radium(Navbar);