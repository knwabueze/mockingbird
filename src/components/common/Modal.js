import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, css } from 'aphrodite'

class Modal extends React.Component {
    static propTypes = {
        isOpen: PropTypes.bool.isRequired,
        onOpen: PropTypes.func,
        className: PropTypes.string,
        styles: PropTypes.object,
        closeModal: PropTypes.func.isRequired,
        isCard: PropTypes.bool
    }

    componentWillReceiveProps(nextProps) {
        if (!this.props.isOpen && nextProps.isOpen)
            this.props.onOpen();
    }

    styles = StyleSheet.create({
        background: {
            backgroundColor: 'rgba(10,10,10,.59)'
        }
    })

    render() {
        const { isOpen, className, styles, children, isCard } = this.props;

        return isOpen ?
                <section
                    className={`modal ${className ? className : ''} ${isOpen ? 'is-active' : ''}`}
                    key={0}
                    style={styles ? styles : {}}>
                    <div onClick={() => this.props.closeModal()} className={`modal-background ${css(this.styles.background)}`}></div>
                    <div className={`${isCard ? 'modal-card' : 'modal-content'}`}>{children}</div>
                    <button className="modal-close" onClick={() => this.props.closeModal()}></button>
                </section> : ''
    }
}

export default Modal;