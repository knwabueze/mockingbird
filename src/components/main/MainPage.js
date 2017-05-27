import React from 'react'
import { StyleSheet, css } from 'aphrodite'
import { inject, observer } from 'mobx-react'

import Header from './Header'
import Card from '../common/Card'
import MasonryLayout from '../common/MasonryLayout'

const randomOutput = (max, min) => Math.round((Math.random() * (max - min) + min));

@inject('uiStore')
@observer
class MainPage extends React.Component {
    styles = StyleSheet.create({
        body: {
            fontSmoothing: 'antialiased',
            color: '#14171a',
            backgroundColor: '#F5F8FA'
        }
    })

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.location === this.props.location
    }

    render() {
        return <div data-main-page >
            <Header />
            <section className={`section ${css(this.styles.body)}`}>
                <div className="container">
                    <div className="level">
                            <h1 className="title is-4 level-item">
                                Unsplash.it Images
                            </h1>
                    </div>
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