import React from 'react'
import './App.css'
import Clavier from './Clavier'
import Devinette from './Devinette'

const WORD_TO_DEVINE = "MAISONS";

class App extends React.Component {

  state = {
    keyboard: this.createKeyboard(),
    wordToDevined: WORD_TO_DEVINE,
    usedLetters: []
  }

  render() {
    const { keyboard, wordToDevined, usedLetters } = this.state;
    return (
      <div className="App">
        <h1>Jeu du Pendu</h1>
        <Devinette word={ this.computeDisplay(wordToDevined, usedLetters) }/>
        <Clavier keyboard={ keyboard } usedLetters={usedLetters} onClick={ this.checkAndUpdateWord }/>
      </div>
    );
  }

  computeDisplay(wordToDevined, usedLetters) {  
    return wordToDevined.replace(/\w/g, (letter) => usedLetters.includes(letter) ? letter : '_')
   }

  // Arrow function to bind this
  checkAndUpdateWord = (letter) => {
    const { usedLetters } = this.state;
    this.setState({ usedLetters : [...usedLetters, letter]});
  }

  createKeyboard() {
    let letters = [];
        for(let i=0; i< 26 ; i++) {
            letters.push(String.fromCharCode(65 + i))
        }
    return letters;
  }

}




export default App;
