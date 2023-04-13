import React from 'react'

type NavbarProps = {
  changeRoute: (c:number)=> void
}

const Navbar = ({changeRoute}:NavbarProps) => {
  return (
    <section className='navbar'>
        <ul>
          <li onClick={() => changeRoute(0)}>
            Home
          </li>
          <li onClick={() => changeRoute(1)}>
            Cart
            </li>
        </ul>
      </section>
  )
}

export default Navbar;