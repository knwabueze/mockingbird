import React from 'react'
import { Redirect, withRouter } from 'react-router-dom'
import { inject } from 'mobx-react'

@inject('auth')
class LogoutRedirect extends React.Component {
    state = {
        finishedOperation: false
    }

    componentDidMount() {
        this.props.auth.signOut();
        this.setState({ finishedOperation: true });
    }

    render() {
        return this.state.finishedOperation ? <Redirect to={this.props.location.state.from} /> : <span />
    }
}

export default withRouter(LogoutRedirect);