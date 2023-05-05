import React from 'react'

export default function Navbar(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="/home"><h2 className='col'><center>ElectroSemi India</center></h2></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          </li>
        <li className="nav-item">
          
        </li>
        <li className="nav-item dropdown">
         <button className='btn btn '><a className='btn btn col' href="/product">Products</a></button>
         <button className='btn btn col'>About us</button>
         <button className='btn btn col'>Contact Us</button>
         <button className='btn btn col'><a className='btn btn col' href="/Ourclient">Our Clients</a></button>
        </li>
        <li className="nav-item">
         
        </li>
      </ul>
      <form className="d-flex" role="search">
      <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" role="switch" onClick={props.fashion} id="flexSwitchCheckDefault"/>
  <label className="form-check-label text-light" htmlFor="flexSwitchCheckDefault" style={{color : props.fashion==="dark" ? "lime" : "black"}}>{props.theme}</label>
</div>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}
