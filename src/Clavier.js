import React from 'react';
import './Clavier.css';



class Clavier extends React.Component {

    constructor({ keyboard, usedLetters, onClick }) {
        super();
        this.keyboard = keyboard;
        this.onClick = onClick;
        this.usedLetters = usedLetters;
    }

    componentWillUpdate({usedLetters}) {
        this.usedLetters = usedLetters;
    }

    render() {
        return (
        <div className="clavier">
            <div>{this.keyboard.map((letter, index) => (
                index < 13 && <span key={index} className={"letterClavier " + (this.disableLetter(letter) && "disable") } onClick={() => this.onClick(letter)}>{letter}</span>            
            ))}
            </div>

            <div>{this.keyboard.map((letter, index) => (
                index >= 13 && <span key={index} className={"letterClavier " + (this.disableLetter(letter) && "disable") } onClick={() => this.onClick(letter)}>{letter}</span>            
            ))}
            </div>
        </div>
        )
    }

    disableLetter = (letter) => {
        return this.usedLetters.includes(letter)
    }

}

export default Clavier;