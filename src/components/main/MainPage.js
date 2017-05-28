import React from 'react'
import Radium from 'radium'

import Header from './Header'
import Card from '../common/Card'
import MasonryLayout from '../common/MasonryLayout'
import { connect } from 'react-redux'
import { logInWithEmailAndPassword, bindUserChanged, signOut } from '../../actions/authActions'

const randomOutput = (max, min) => Math.round((Math.random() * (max - min) + min));

@Radium
@connect(
    ({ ui }) => ({ ui }),
    (dispatch) => ({
        logIn: (email, password) => dispatch(logInWithEmailAndPassword(email, password)),
        bindAuth: () => dispatch(bindUserChanged()),
        signOut: () => dispatch(signOut())
    })
)
class MainPage extends React.Component {
    styles = {
        body: {
            fontSmoothing: 'antialiased',
            color: '#14171a',
            backgroundColor: '#F5F8FA'
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.location === this.props.location
    }

    componentWillMount() {
        this.props.bindAuth()
    }

    render() {
        return <div data-main-page >
            <Header />
            <section className='section'
                style={this.styles.body}>
                <div className="container">
                    <button onClick={() => this.props.logIn("testboi@gmail.com", "Kamkam22!")}>Log In</button>
                    <button onClick={() => this.props.signOut()}>Sign Out</button>
                    <MasonryLayout
                        columnSize="15em"
                        columnGap="1em">
                        {
                            Array(20).fill().map((v, i) => {
                                const x = randomOutput(960, 1280);
                                const y = randomOutput(960, 1280);
                                return <Card key={i} x={x} y={y} />
                            })
                        }
                    </MasonryLayout>
                </div>
            </section>
        </div>
    }
}

export default MainPage;