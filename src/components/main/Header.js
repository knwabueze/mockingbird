import React from 'react';
import Navbar from './Navbar'
import { StyleSheet, css } from 'aphrodite'

const styles = StyleSheet.create({
    heroStyles: {
        background: 'linear-gradient(to right, #40405c 0%,#6f71aa 80%,#8a76ab 100%)',
        overflow: 'hidden'
    },
    title: {
        fontWeight: 400
    },
    subtitle: {
        fontWeight: 300
    }
})

const Header = () => <header className={["hero is-small is-dark", css(styles.heroStyles)].join(' ')}>
    <div className="hero-head">
        <Navbar transparent />
    </div>
    <div className="hero-body has-text-centered">
        <h1 className={["title is-1", css(styles.title)].join(' ')}>It's a sin to kill a mockingbird.</h1>
        <h2 className={["subtitle is-4", css(styles.subtitle)]}>- Atticus Finch</h2>
    </div>
</header>;

export default Header;