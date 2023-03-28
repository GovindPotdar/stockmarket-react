import React, { useContext } from 'react'
import style from './style.module.css'
import currencyExchangeSvg from '../../assets/svgs/currency-exchange.svg'
import { Link, NavLink } from 'react-router-dom'
import CommoditieList from '../../lib/CommoditieList'
import Authentication from '../Authentication'
import lockSvg from '../../assets/svgs/lock.svg'
import UserContext from '../../contexts/UserAuthenticationContext'

function Navbar() {
  const { isUserLoggedIn } = useContext(UserContext)
  return (
    <nav className="navbar sticky-top navbar-expand-lg bg-body-tertiary bg-dark" data-bs-theme="dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/" ><b><img alt="" src={currencyExchangeSvg} className={style.navIcon} /> tock Market</b></Link>
        <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className=" navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to="/"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }>Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/exchange-rate"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }>{!isUserLoggedIn && <img className={style.lockIcon} src={lockSvg} alt='lock'/>}Exchange</NavLink>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              {!isUserLoggedIn && <img className={style.lockIcon} src={lockSvg} alt='lock'/>}Commoditie Charts
              </a>
              <ul className="dropdown-menu">
                {
                  CommoditieList.map((commoditie)=>{
                    return  <li key={commoditie.function} > <NavLink to={`commoditie/${commoditie.function}`} className='dropdown-item'>{!isUserLoggedIn && <img className={style.lockIcon} src={lockSvg} alt='lock'/>} {commoditie.title}</NavLink> </li>
                  })
                }
              </ul>
            </li>
          </ul>
          <Authentication/>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
