import React from 'react'
import Radium from 'radium'
import { observer, inject } from 'mobx-react'
import { Link } from 'react-router-dom'

const styles = {
    invertIcon: {
        filter: 'brightness(0) invert(1)',
        fontSize: 20
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

const Navbar = ({ ui }) =>
    <nav
        className="nav has-shadow is-primary is-dark"
        style={styles.backGradient}
        data-signup-navbar>
        <div className="nav-left" style={{
            flex: 1
        }}></div>
        <div
            className="nav-center"
            style={[styles.flexboxCenter, {
                flex: 1
            }]}>
            <Link to="/">
                <span
                    className="icon nav-item"
                    style={styles.invertIcon}>
                    &#128038;
                </span>
            </Link>
        </div>
        <div className="nav-right" style={{
            flex: 1
        }}>
            <a
                style={{
                    color: 'rgba(245, 245, 245, 0.7)',
                    ':hover': {
                        color: "#f5f5f5"
                    },
                    paddingRight: "10%"
                }}
                className="nav-item"
                onClick={() => ui.toggleLoginModal()}>
                Have an account? Log in.
            </a>
        </div>
    </nav>;

export default inject("ui")(observer(Radium(Navbar)));