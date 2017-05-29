import React from 'react'
import Radium from 'radium'
import { NavLink, withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import { inject, observer } from 'mobx-react'

@inject(stores => ({
    ui: stores.ui,
    auth: stores.auth
}))
@observer
@Radium
class Navbar extends React.Component {
    static propTypes = {
        transparent: PropTypes.bool,
        hasShadow: PropTypes.bool
    }

    styles = {
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
    }

    showModal = () => this.props.ui.toggleLoginModal();

    renderNoAuth() {
        return <div className="nav-right">
            <NavLink activeClassName="is-active" to="/signup" className="nav-item">Sign Up</NavLink>
            <div className="nav-item">
                <a onClick={this.showModal} style={this.styles.logInButton} className="button">Log In</a>
            </div>
        </div>
    }

    renderAuth() {
        return <div className="nav-right">
            <NavLink className="nav-item" to={{
                pathname: '/logout',
                state: { from: location.pathname }
            }}>Sign Out</NavLink>
            <p className="nav-item">Welcome, {this.props.auth.user.email}</p>
        </div>
    }

    render() {
        const { hasShadow, transparent } = this.props;
        return <header
            className={`nav ${hasShadow ? 'has-shadow' : ''}`}
            style={transparent && !hasShadow ? this.styles.transparentStyle : {}}>
            <div className="container">
                <div className="nav-left">
                    <span
                        className='nav-item'
                        style={[this.styles.logoStyle, transparent ? this.styles.transparentLogoStyle : {}]}
                        role="img"
                        aria-label="mockingbird">
                        &#128038;
                   </span>
                </div>
                {!this.props.auth.isAuthenticated ? this.renderNoAuth() : this.renderAuth()}
            </div>
        </header>
    }
}

export default withRouter(Navbar);