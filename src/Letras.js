import React from 'react'

function Letras(props) {
  return (
    <button
      onClick={props.mainFunction}
      className={props.enable}
      disabled={props.disabled}
      data-test="letter"
    >
      {props.word}
    </button>
  )
}

export default Letras
