import React from 'react'
import { NavLink } from 'react-router-dom'

function Notfound() {
  return (
    <div className='notfound'>
      <div className="notfoundContent">
      <h3>Désolé cette page n'existe pas</h3>
      <button><NavLink exact to='/'><i className='fas fa-home'></i><span>Acceuil</span></NavLink></button>
      
      </div>
     
    </div>
  )
}

export default Notfound
