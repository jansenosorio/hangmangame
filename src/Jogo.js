import React from 'react'

function Jogo() {
  return (
    <section className="game-container">
      <div className="column-1-left">
        <div className="img-forca">
          <img src="./assets/forca0.png"></img>
        </div>
      </div>
      <div className="column-2-right">
        <div className="button-word-choose">
          <button>Escolher Palavra</button>
        </div>
        <div className="word">Jansen</div>
      </div>
    </section>
  )
}

export default Jogo
