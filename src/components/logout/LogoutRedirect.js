import React from 'react'
import { Redirect, withRouter } from 'react-router-dom'
import { inject } from 'mobx-react'

@inject('auth')
class LogoutRedirect extends React.Component {
    state = {
        finishedOperation: false
    }

    componentDidMount() {
        this.props.location.state && this.props.auth.signOut();
        this.setState({ finishedOperation: true });
    }

    render() {        
        const from = this.props.location.state ? this.props.location.state.from : '/';
        return this.state.finishedOperation ? <Redirect to={from} /> : <span />
    }
}

export default withRouter(LogoutRedirect);