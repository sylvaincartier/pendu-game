import React from 'react'
import './App.css'
import Clavier from './Clavier'
import Devinette from './Devinette'

const WORD_TO_DEVINE = ["MAISONS", "ETUDE", "ARBRE", "DICTIONNAIRE", "SAPIN", "CADEAUX", "TABLE", "ORDINATEUR", "BUREAU"];
const CHAR_GUESS = "_";

class App extends React.Component {

  state = {
    keyboard: this.createKeyboard(),
    wordToDevined: this.createWord(),
    usedLetters: [],
    won: false,
  };

  render() {
    const { keyboard, wordToDevined, usedLetters, won } = this.state;
    return (
      <div className="App">
        <h1>Jeu du Pendu</h1>
        <Devinette word={ this.computeDisplay(wordToDevined, usedLetters) }/>
        {!won ? 
        <Clavier keyboard={ keyboard } usedLetters={usedLetters} onClick={ this.checkAndUpdateWord }/> :
        <button onClick={this.resetGame}>NOUVELLE PARTIE</button>}
      </div>
    );
  }

  computeDisplay(wordToDevined, usedLetters) {  
    return wordToDevined.replace(/\w/g, (letter) => usedLetters.includes(letter) ? letter : CHAR_GUESS)
   }

  checkWon(wordToDevined, usedLetters) {
    if(Array.from(wordToDevined).every((letter) => usedLetters.includes(letter))) {
      this.setState({ won: true })
    }
  }

  // Arrow function to bind this
  checkAndUpdateWord = (letter) => {
    const { usedLetters, wordToDevined } = this.state;
    this.setState({ usedLetters : [...usedLetters, letter]});
    this.checkWon(wordToDevined, [...usedLetters, letter]);
  }

  createKeyboard() {
    let letters = [];
        for(let i=0; i< 26 ; i++) {
            letters.push(String.fromCharCode(65 + i))
        }
    return letters;
  }

  createWord() {
    return WORD_TO_DEVINE[getRandomInt(WORD_TO_DEVINE.length)];
  }

  resetGame = () => {
    this.setState({usedLetters: [], won: false, wordToDevined: this.createWord()})
  }

}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}


export default App;
