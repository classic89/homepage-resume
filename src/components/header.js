import React from "react"
import Footer from './footer'
import avatar from '../images/avatar.jpg'


class Header extends React.Component {
  render() {
      return (
          <header id="header">
              <div className="inner">
                  <a href="#" className="image avatar">
                        <img src={avatar} alt="Avatar of Megan"/>
                        <h1><strong>I am Megan Wilson</strong></h1>
                  </a>
              </div>
              <Footer />
          </header>
      )
  }
}

export default Header
