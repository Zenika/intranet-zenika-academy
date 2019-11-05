import React, { Component } from 'react';
import './Card.scss';

class Card extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { name, description } = this.props.data
        return (
            <article class="card">
                <section class="image is-4by3 card-image">
                    <img src="https://bulma.io/images/placeholders/1280x960.png" alt="photo de contact" />
                </section>
                <section class="card-content">
                    <div class="media">
                        <div class="media-content">
                            <h1 class="title is-5">{name}</h1>
                        </div>
                    </div>
                    <h2 class="subtitle is-6">
                        Descriptif de la personne et contacts réseaux / autres
                    </h2>
                    <p class="content">
                        {description}
                    </p>
                </section>
            </article>
        );
    }
}

export default Card;



