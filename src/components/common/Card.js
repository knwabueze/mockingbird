import React from 'react'
import Radium from 'radium'

const cardStyles = {
    card: {
        marginBottom: '1em',
        display: 'inline-block',
        backgroundColor: '#fefefe'
    }
}

const Card = Radium(({ x, y }) =>
    <div style={[cardStyles.card]} className="card">
        <div className="card-image">
            <figure className="image">
                <img src={`https://source.unsplash.com/random/${x}x${y}`} alt="1280x960" />
            </figure>
        </div>
        <div className="card-content">
            <div className="media">
                <div className="media-left">
                    <figure className="image is-48x48">
                        <img src="https://source.unsplash.com/random/96x96" alt="96x96" />
                    </figure>
                </div>
                <div className="media-content">
                    <p className="title is-4">Unsplash</p>
                    <p className="subtitle is-6">@unsplash</p>
                </div>
            </div>

            <div className="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                <a>#css</a> <a>#responsive</a>
                <br />
                <small>11:09 PM - 1 Jan 2016</small>
            </div>
        </div>
</div>);

export default Card;