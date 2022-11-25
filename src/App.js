import React from 'react'
import Jogo from './Jogo'
import Letras from './Letras'
import Chute from './Chute'
import palavras from './palavras'
import { useState, usePrevious } from 'react'

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
  const [selectedWord] = React.useState(() => {
    const word = palavras[Math.floor(Math.random() * palavras.length)]
    return word
  })
  const [img, setImg] = React.useState('forca0')
  const [count, setCount] = React.useState(0)

  function startGame() {
    setWordIsEnable('button')
    setBtnIsEnable(false)
    setHiddenWord(renderizeHiddenWord)
    console.log(selectedWord)
    setImg(`forca${count}`)
  }

  const renderizeHiddenWord = () => {
    let hiddenWord = ''
    {
      for (let i = 0; i < selectedWord.length; i++) {
        hiddenWord += '_'
      }
    }
    return hiddenWord
  }

  const mainFunctionGame = elm => {
    const newArrHiddenWord = hiddenWord.split('')
    const newArrSelectedWord = selectedWord.split('')

    if (newArrSelectedWord.includes(elm)) {
      {
        for (let i = 0; i < newArrSelectedWord.length; i++) {
          if (elm === newArrSelectedWord[i]) {
            newArrHiddenWord[i] = elm
            setHiddenWord(newArrHiddenWord.join(''))
          }
        }
      }
    } else if (count < 6) {
      setCount(count + 1)
      setImg(`forca${count + 1}`)
    }
  }

  return (
    <main>
      <section className="main-game">
        <Jogo btnFunction={startGame} hiddenWord={hiddenWord} img={img} />
      </section>
      <section className="container-keyboard">
        <div className="keyboard">
          {alfabeto.map(elm => (
            <Letras
              key={elm}
              word={elm.toUpperCase()}
              enable={wordIsEnable}
              disabled={btnIsEnable}
              mainFunction={() => mainFunctionGame(elm)}
            />
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
