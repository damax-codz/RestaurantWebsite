import React from 'react'
import'./button.css' 

function Button(props) {
  return (
    <div className='button' style={{color:props.color,backgroundColor:props.bg}}>{props.name}</div>
  )
}

export default Button