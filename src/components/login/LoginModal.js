import React from 'react'
import { withRouter } from 'react-router-dom'
import Modal from '../common/Modal'
import PropTypes from 'prop-types'

class LoginModal extends React.Component {
    static propTypes = {
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
    }

    pushPreviousRoute = () => {
        const { history, location } = this.props;
        history.push(location.state.callBackRoute);
    }

    render() {
        const { location, history } = this.props;
        const isModal = !!(
            location.state &&
            location.state.modal
        )

        if (location.state === undefined || location.state.modal === undefined) {
            if (location.state === undefined || location.state.callBackRoute === undefined) {
                history.push("/");
            } else {
                history.push(location.state.callBackRoute);
            }
        }

        return <Modal
            isCard
            isOpen={isModal}
            closeModal={this.pushPreviousRoute}
            login-modal>
                <section className="modal-card-body">
                    <p>Hello</p>
                </section>
        </Modal>
    }
}

export default withRouter(LoginModal);