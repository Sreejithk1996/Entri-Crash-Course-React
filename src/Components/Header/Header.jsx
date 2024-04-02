import './header.css'
import React from 'react';


let greeting;
const time = new Date().getHours()
const date = new Date().toDateString()
if(time<12){
 greeting = "Morning"
}
else if(time<18){
  greeting = "Evening"
}
else {
  greeting = "Night"
}

function Header() {
  return (
    <div>
        <h1>Good {greeting} ID!</h1>
        <h1 className='head'>Todays date {date}</h1>
    </div>
  )
}

export default Header
