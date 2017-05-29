import React from 'react'
import Radium from 'radium'
import Header from './Header'
import Card from '../common/Card'
import MasonryLayout from '../common/MasonryLayout'
import LoginModal from '../login/LoginModal'

const randomOutput = (max, min) => Math.round((Math.random() * (max - min) + min));

@Radium
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

    render() {
        return <div data-main-page >
            <Header />
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