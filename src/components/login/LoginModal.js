import React from 'react'
import { withRouter } from 'react-router-dom'
import Modal from '../common/Modal'
import PropTypes from 'prop-types'
import LoginForm from './LoginForm'
import { connect } from 'react-redux'
import { toggleLoginModal } from '../../actions/ui-actions'

@connect(
    ({ ui }) => ({ shouldShowModal: ui.LOGIN_MODAL_IS_VISIBLE }),
    dispatch => ({
        closeModal: () => dispatch(toggleLoginModal())
    })
)
class LoginModal extends React.Component {
    static propTypes = {
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired,
        shouldShowModal: PropTypes.bool.isRequired,
        closeModal: PropTypes.func.isRequired
    }

    render() {
        return <Modal
            isCard            
            isOpen={this.props.shouldShowModal}
            closeModal={this.props.closeModal}
            login-modal>
                <section className="modal-card-body">
                    <LoginForm />
                </section>
        </Modal>
    }
}

export default withRouter(LoginModal);