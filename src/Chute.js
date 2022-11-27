import React from 'react'

function Chute(props) {
  return (
    <div className="shot">
      <div className="phrases-shot">Já sei a palavra!</div>
      <div className="input-shot">
        <input
          type="text"
          disabled={props.disabled}
          onChange={props.fChange}
        ></input>
      </div>
      <div className="button-shot" onClick={props.fShot}>
        <button>Chutar</button>
      </div>
    </div>
  )
}

export default Chute
