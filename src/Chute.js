import React from 'react'

function Chute(props) {
  return (
    <div className="shot">
      <div className="phrases-shot">Já sei a palavra!</div>
      <div className="input-shot">
        <input disabled={props.disabled}></input>
      </div>
      <div className="button-shot">
        <button>Chutar</button>
      </div>
    </div>
  )
}

export default Chute
