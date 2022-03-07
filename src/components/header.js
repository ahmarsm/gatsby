import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = () => (
  <header id="header">

  <div className="headertop">
    <div className="container">
      <div className="row align-items-center">
        <div className="col"> 
          <Link to="/" className="logo"><img src="./images/logo.png" alt="img"/></Link>
        </div>
        <div className="col-auto">
          <div className="tollnumber">
              Tollfree: <Link to="tel:800462372">800 462372</Link>
          </div>
        </div>
        <div className="col-auto">
          <div className="searchbx">
              <input type="text" placeholder="Search"/>
              <button type="submit" className="searchbtn">Search</button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="headerbot">
    <div className="container">
      <div className="forfullwidthmenu">
      <div className="row align-items-center">
        <div className="col-auto">
          <div className="menuconainer">
            <nav className="navbar">
              <Link to="/" className="logo mobile"><img src="./images/logo.png" alt="img"/></Link>
              <ul className="menubx">
                <li className="menu-item-has-children fullwidth"><Link to="#">Personal</Link>
                    <ul className="sub-menu">
                        <div className="fullulli">
                        <h2>Car insurance</h2>
                        <ul className="row justify-content-between">
                        <li className="col-md-3"><Link to="#">Car insurance</Link></li>
                        <li className="col-md-3"><Link to="#">Home insurance</Link></li>
                        <li className="col-md-3"><Link to="#">Travel insurance</Link></li>
                        <li className="col-md-3"><Link to="#">Personal accident</Link></li>
                        </ul>
                        </div>
                    </ul>
                </li>
                <li className="menu-item-has-children fullwidth"><Link to="#">Business</Link>
                    <ul className="sub-menu">
                        <div className="fullulli">
                        <h2>Small business</h2>
                        <ul className="row justify-content-between">
                        <li className="col-md-3"><Link to="#">Small business</Link></li>
                        <li className="col-md-3"><Link to="#">Property insurance</Link></li>
                        <li className="col-md-3"><Link to="#">Marine Insurance</Link></li>
                        <li className="col-md-3"><Link to="#">Motor fleet insurance</Link></li>
                        <li className="col-md-3"><Link to="#">Liability insurance</Link></li>
                        <li className="col-md-3"><Link to="#">Workmen’s compensation</Link></li>
                        <li className="col-md-3"><Link to="#">Casualty</Link></li>
                        <li className="col-md-3"><Link to="#">Large & complex</Link></li>
                        </ul>
                        </div>
                    </ul>
                </li>
                <li><Link to="#">About Us</Link></li>
                <li><Link to="#">Blog</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="col-auto ms-auto"> 
          <Link to="#" className="btn orangered">Make a claim</Link>
         </div>
      </div>
    </div>
    </div>
  <Link to="javascript:" className="menu-show mobile"> <em></em><em></em><em></em></Link>
  </div> 
</header>
)

export default Header
