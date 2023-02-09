import React from 'react'
import { Link } from 'react-router-dom'

function Header(): JSX.Element {
  return (
    <div className='header_main'>
        <Link to={"/"} >
            Books
        </Link>
        <Link to={"/cart"} >
            Cart
        </Link>
    </div>
  )
}

export default Header