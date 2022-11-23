import React from 'react'
import Jogo from './Jogo'
import Letras from './Letras'
import Chute from './Chute'
import palavras from './palavras'
import { useState } from 'react'

function App() {
  const alfabeto = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
  ]
  const [wordIsEnable, setWordIsEnable] = React.useState('button-disable')
  const [btnIsEnable, setBtnIsEnable] = React.useState(true)
  const [hiddenWord, setHiddenWord] = React.useState('')
  const [img, setImg] = React.useState('forca0')

  function startGame() {
    setWordIsEnable('button')
    setBtnIsEnable(false)
    let sortedWord = sortWord(palavras)
    let hiddenWord = renderizeHiddenWord(sortedWord)
    setHiddenWord(hiddenWord)
    setImg('forca0')
  }

  function sortWord(arr) {
    let word = arr[Math.floor(Math.random() * palavras.length)]
    return word
  }

  function renderizeHiddenWord(word) {
    let hiddenWord = ''
    {
      for (let i = 0; i < word.length; i++) {
        hiddenWord += '_'
      }
    }
    return hiddenWord
  }

  return (
    <main>
      <section className="main-game">
        <Jogo btnFunction={startGame} hiddenWord={hiddenWord} img={img} />
      </section>
      <section className="container-keyboard">
        <div className="keyboard">
          {alfabeto.map(elm => (
            <Letras key={elm} word={elm.toUpperCase()} enable={wordIsEnable} />
          ))}
        </div>
      </section>
      <section className="container-shot">
        <Chute disabled={btnIsEnable} />
      </section>
    </main>
  )
}

export default App
