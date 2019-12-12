import React from 'react'
import './App.css'
import Clavier from './Clavier'
import Devinette from './Devinette'
import { getForkTsCheckerWebpackPluginHooks } from 'fork-ts-checker-webpack-plugin/lib/hooks';

const WORD_TO_DEVINE = "MAISONS";
const CHAR_GUESS = "_";

class App extends React.Component {

  state = {
    keyboard: this.createKeyboard(),
    wordToDevined: WORD_TO_DEVINE,
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
    console.log('wordToDevined', wordToDevined, 'usedLetters', usedLetters);
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

  resetGame = () => {
    this.setState({usedLetters: [], won: false})
  }

}




export default App;
