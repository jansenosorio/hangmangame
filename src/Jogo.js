import React from 'react'

function Jogo(props) {
  return (
    <section className="game-container">
      <div className="column-1-left">
        <div className="img-forca">
          <img src={`./assets/${props.img}.png`} data-test="game-image"></img>
        </div>
      </div>
      <div className="column-2-right">
        <div
          onClick={props.btnFunction}
          className="button-word-choose"
          data-test="choose-word"
        >
          <button>Escolher Palavra</button>
        </div>
        <div
          className={props.classWord}
          data-test="word"
          data-answer={props.dataAnswer}
        >
          {props.hiddenWord}
        </div>
      </div>
    </section>
  )
}

export default Jogo
