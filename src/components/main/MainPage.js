import React from 'react'
import Radium from 'radium'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Header from './Header'
import Card from '../common/Card'
import MasonryLayout from '../common/MasonryLayout'
import { toggleLoginModal } from '../../actions/ui-actions'
import LoginModal from '../login/LoginModal'

const randomOutput = (max, min) => Math.round((Math.random() * (max - min) + min));

@Radium
@connect(
    (state) => ({}),
    dispatch => ({
        showModal: () => dispatch(toggleLoginModal())
    })
)
class MainPage extends React.Component {
    static propTypes = {
        showModal: PropTypes.func.isRequired
    }

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

    showModal = () => {
        const { showModal } = this.props;
        showModal();
    }

    render() {
        return <div data-main-page >
            <Header logInClicked={this.showModal} />
            <section className='section'
                style={this.styles.body}>
                <div className="container">
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
            <LoginModal />
        </div>
    }
}

export default MainPage;