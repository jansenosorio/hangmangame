import React from 'react'

function teste() {
  console.log('teste')
}

function Letras(props) {
  return <div className={props.enable}>{props.word}</div>
}

export default Letras
