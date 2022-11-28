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
  const [selectedWord] = React.useState(() => {
    const word = palavras[Math.floor(Math.random() * palavras.length)]
    return word
  })
  const [img, setImg] = React.useState('forca0')
  const [count, setCount] = React.useState(0)
  const [shot, setShot] = React.useState('')
  const [word, setWord] = useState('word')
  const [isGameEnd, setIsGameEnd] = useState('false')
  const [choosedWord, setChooseWord] = useState('')

  function startGame() {
    if (isGameEnd === 'false') {
      setWordIsEnable('button')
      setBtnIsEnable(false)
      setHiddenWord(renderizeHiddenWord)
      console.log(selectedWord)
      setImg(`forca${count}`)
      setWord('word')
      setChooseWord(1)
    } else {
      window.location.reload(true)
    }
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

    setChooseWord(elm)

    if (newArrSelectedWord.includes(elm)) {
      {
        for (let i = 0; i < newArrSelectedWord.length; i++) {
          if (elm === newArrSelectedWord[i]) {
            newArrHiddenWord[i] = elm
            setHiddenWord(newArrHiddenWord.join(''))
          }
        }
      }
      if (!newArrHiddenWord.includes('_')) {
        setWord('word-winner')
        setHiddenWord(selectedWord)
        setBtnIsEnable(true)
        setWordIsEnable('button-disable')
        setIsGameEnd('true')
      }
    } else if (count <= 4) {
      setCount(count + 1)
      setImg(`forca${count + 1}`)
    } else {
      if (newArrHiddenWord.includes('_')) {
        setWord('word-looser')
        setHiddenWord(selectedWord)
        setBtnIsEnable(true)
        setWordIsEnable('button-disable')
        setImg(`forca6`)
        setIsGameEnd('true')
      }
    }
  }

  const shotWord = e => {
    setShot(e.target.value)
  }

  const shotFunction = () => {
    if (selectedWord === shot) {
      setWord('word-winner')
      setHiddenWord(selectedWord)
      setBtnIsEnable(true)
      setWordIsEnable('button-disable')
      setIsGameEnd('true')
    } else {
      setWord('word-looser')
      setHiddenWord(selectedWord)
      setBtnIsEnable(true)
      setWordIsEnable('button-disable')
      setImg(`forca6`)
      setIsGameEnd('true')
    }
  }

  return (
    <main>
      <section className="main-game">
        <Jogo
          btnFunction={startGame}
          hiddenWord={hiddenWord}
          img={img}
          classWord={word}
          dataAnswer={selectedWord}
        />
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
        <Chute disabled={btnIsEnable} fChange={shotWord} fShot={shotFunction} />
      </section>
    </main>
  )
}

export default App
