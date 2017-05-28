import React from 'react'
import Modal from '../common/Modal'
import PropTypes from 'prop-types'
import Radium from 'radium'
import LoginForm from './LoginForm'
import { connect } from 'react-redux'
import { toggleLoginModal } from '../../actions/ui-actions'
import icon from '../../static/icon.png'

@connect(
    ({ ui }) => ({ shouldShowModal: ui.LOGIN_MODAL_IS_VISIBLE }),
    dispatch => ({
        closeModal: () => dispatch(toggleLoginModal())
    })
)
@Radium
class LoginModal extends React.Component {
    static propTypes = {
        shouldShowModal: PropTypes.bool.isRequired,
        closeModal: PropTypes.func.isRequired
    }

    style = {
        fadeInAnimation: Radium.keyframes({
            '0%': { opacity: '0' },
            '50%': { opacity: '0.5' },
            '100%': { opacity: '1' }
        }, 'fadeIn'),
        fadeIn: {
            animation: 'x ease-in 0.8s 1',
            animationName: this.fadeInAnimation
        },
        roundedEdges: {
            borderRadius: '0.2em',
            overflow: 'none'
        },
        iconMargin: {
            marginBottom: '0.8em'
        },
        cardWidth: {
            
        }
    }

    render() {
        return <Modal
            isCard
            isOpen={this.props.shouldShowModal}
            closeModal={this.props.closeModal}
            login-modal>
            <section className="modal-card-body" style={[this.style.fadeIn,
            this.style.roundedEdges,
            this.style.cardWidth]}>
                <section className="section has-text-centered">
                    <span className="icon is-medium" style={this.style.iconMargin}>
                        <img src={icon} alt="" />
                    </span>
                    <LoginForm />
                </section>
            </section>
        </Modal>

    }
}

export default LoginModal;