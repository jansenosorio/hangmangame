import Jogo from './Jogo'
import Letras from './Letras'
import Chute from './Chute'
import palavras from './palavras'

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

  return (
    <main>
      <section className="main-game">
        <Jogo />
      </section>
      <section className="container-keyboard">
        <div className="keyboard">
          {alfabeto.map(elm => (
            <Letras key={elm} word={elm.toUpperCase()} />
          ))}
        </div>
      </section>
      <section className="container-shot">
        <Chute />
      </section>
    </main>
  )
}

export default App
