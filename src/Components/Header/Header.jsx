import './Header/header.css'

const date = new Date().toDateString()
function Header() {
  return (
    <div>
        <h1 className='head'>Todays date is {date}</h1>
    </div>
  )
}

export default Header
