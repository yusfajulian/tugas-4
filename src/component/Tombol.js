import React from 'react'

function Tombol(props) {
  const munculkanAlert = (props) => {
    alert(`Anda telah ${props.name}`)
  }

  return (
    <button onClick={() => munculkanAlert(props)}>Tombol</button>
  )
}

export default Tombol