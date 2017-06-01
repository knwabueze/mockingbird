import React from 'react'
import Navbar from './Navbar'
import SignupForm from './SignupForm'

class SignupPage extends React.Component {
    styles = {
        sectionColor: {
            backgroundColor: "#f5f5f5",
            height: '100vh'
        },
        containerMargin: {
            marginLeft: '30%',
            marginTop: '4em',
            display: 'block'
        },
        thiccText: {
            fontWeight: 700
        }
    }
    render() {
        return <div data-signup-page>
            <Navbar />
            <section style={this.styles.sectionColor} className="section">
                <div style={this.styles.containerMargin}>
                    <h1 style={this.styles.thiccText} className="title is-4">Join Mockingbird.</h1>
                    <SignupForm />
                </div>
            </section>
        </div>
    }
}

export default SignupPage;