import React from 'react'
import PropTypes from 'prop-types'
import Radium from 'radium'

@Radium
class Modal extends React.Component {
    static propTypes = {
        isOpen: PropTypes.bool.isRequired,
        onOpen: PropTypes.func,
        className: PropTypes.string,
        style: PropTypes.object,
        closeModal: PropTypes.func.isRequired,
        isCard: PropTypes.bool
    }

    componentWillReceiveProps(nextProps) {
        if (!this.props.isOpen && nextProps.isOpen && this.props.onOpen)
            this.props.onOpen();
    }

    styles = {
        background: {
            backgroundColor: 'rgba(10,10,10,.59)'
        }
    }

    render() {
        const { isOpen, className, style, children, isCard } = this.props;

        return isOpen ?
            <section
                className={`modal ${isOpen ? 'is-active' : ''} ${className ? className : ''}`}
                key={0}
                style={style ? style : {}}>
                <div onClick={() => this.props.closeModal()} style={this.styles.background} className='modal-background'></div>
                <div className={`${isCard ? 'modal-card' : 'modal-content'}`}>{children}</div>
                <button className="modal-close" onClick={() => this.props.closeModal()}></button>
            </section> : <span />
    }
}

export default Modal;