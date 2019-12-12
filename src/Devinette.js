import React from 'react';
import './Devinette.css';

class Devinette extends React.Component {

    constructor({ word }) {
        super();
        this.word = Array.from(word);
    }

    componentWillUpdate({word}) {
        this.word = Array.from(word);
    }

    render() {
        return (
            <div>{this.word.map((letter, index) => (<span key={index} className="letter">{ letter }</span>))}</div>
        )
    }
}

export default Devinette;