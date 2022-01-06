import React from 'react'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { FaKaggle } from 'react-icons/fa'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Dimas A. <br /> Sudjito
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://drive.google.com/file/d/1OzIE1vc4hVfwzwVrcW4hxOkOqxsna8IJ/view?usp=sharing"
                target="_blank"
              >
                Resume
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/portfolio">
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/activity">
                Activity
              </a>
            </li>
          </ul>
          <div className="d-flex">
            <a href="http://github.com/dimassudjito" className="text-dark mx-2">
              <AiFillGithub size={35} />
            </a>
            <a
              href="https://www.kaggle.com/dimasasudjito"
              className="text-dark mx-2"
            >
              <FaKaggle size={30} />
            </a>
            <a
              href="https://www.linkedin.com/in/dimas-sudjito"
              className="text-dark mx-2"
            >
              <AiFillLinkedin size={35} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
