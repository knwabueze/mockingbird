import React from 'react'
import Radium from 'radium'
import { Link } from 'react-router-dom'

@Radium
class NotFound extends React.Component {
    styles = {
        error: {
            color: '#000',
            background: '#fff',
            fontFamily: '-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',
            height: '100vh',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
        },

        desc: {
            display: 'inline-block',
            textAlign: 'left',
            lineHeight: '49px',
            height: '49px',
            verticalAlign: 'middle'
        },

        h1: {
            display: 'inline-block',
            borderRight: '1px solid rgba(0, 0, 0,.3)',
            margin: 0,
            marginRight: '20px',
            padding: '10px 23px 10px 0',
            fontSize: '24px',
            fontWeight: 500,
            verticalAlign: 'top'
        },

        h2: {
            fontSize: '14px',
            fontWeight: 'normal',
            margin: 0,
            padding: 0
        }
    }
    render() {
        return <section style={this.styles.error}>
            <div>
                <style dangerouslySetInnerHTML={{ __html: 'body { margin: 0 }' }} />
                <h1 style={this.styles.h1}>404</h1>
                <div style={this.styles.desc}>
                    <h2 style={this.styles.h2}>This page could not be found. <Link to="/">Return home?</Link></h2>
                </div>
            </div>
        </section>
    }
}

export default NotFound;