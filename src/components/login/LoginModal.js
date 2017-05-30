import React from 'react'
import Modal from '../common/Modal'
import Radium from 'radium'
import LoginForm from './LoginForm'
import icon from '../../static/icon.svg'
import { inject, observer } from 'mobx-react'

@inject('ui')
@observer
@Radium
class LoginModal extends React.Component {
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
        }
    }

    closeModal = () => this.props.ui.toggleLoginModal()

    render() {
        const { showLoginModal } = this.props.ui;
        return <Modal
            isCard
            isOpen={showLoginModal}
            closeModal={this.closeModal}
            login-modal>
            <section className="modal-card-body" style={[this.style.fadeIn,
            this.style.roundedEdges,
            this.style.cardWidth]}>
                <section className="section">
                    <div className="has-text-centered">
                        <span className="icon is-medium" style={this.style.iconMargin}>
                            <img src={icon} alt="" />
                        </span>
                    </div>
                    <LoginForm />
                </section>
            </section>
        </Modal>

    }
}

export default LoginModal;