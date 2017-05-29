import React from 'react';
import Radium from 'radium'
import Navbar from './Navbar'

const styles = {
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
}

const Header = Radium(({ logInClicked }) => <header className='hero is-small is-dark'
    style={styles.heroStyles}>
    <div className="hero-head">
        <Navbar transparent />
    </div>
    <div className="hero-body has-text-centered">
        <i><h1 className='title is-1' style={styles.title}>"It's a sin to kill a mockingbird."</h1></i>
        <i><h2 className='subtitle is-4' style={styles.subtitle}>- Atticus Finch</h2></i>
    </div>
</header>);

export default Header;