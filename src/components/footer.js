import { Link } from "gatsby"
import React from "react"

const Footer = () => (
<>
<div className="curvebx"><img className="img-fluid" src="./images/footer-bg.png" alt="img"/></div>
<footer className="footer pb-0">
 <div className="container">
 <div className="row">

  <div className="col-6 col-md-3">
      <h3 className="wow fadeIn" data-wow-delay="0.1s">Personal</h3>
      <ul className="linksbx wow fadeInUp" data-wow-delay="0.3s">
        <li><Link to="#">Car Insurance</Link></li>
        <li><Link to="#">Home Insurance</Link></li>
        <li><Link to="#">Travel Insurance</Link></li>
        <li><Link to="#">Personal Accident</Link></li>
        <li><Link to="#">Legal Information</Link></li>
      </ul>
  </div>

<div className="col-6 col-md-3">
    <h3 className="wow fadeIn" data-wow-delay="0.1s">Business</h3>
    <ul className="linksbx wow fadeInUp" data-wow-delay="0.3s">
      <li><Link to="#">Small Business</Link></li>
      <li><Link to="#">Property Insurance</Link></li>
      <li><Link to="#">Marine Insurance</Link></li>
      <li><Link to="#">Motor Fleet Insurance</Link></li>
      <li><Link to="#">Liability Insurance</Link></li>
      <li><Link to="#">Workmen's Compensation</Link></li>
      <li><Link to="#">Large &amp; Complex</Link></li>
      <li><Link to="#">Casualty</Link></li>
    </ul>
</div>

<div className="col-6 col-md-3">
    <h3 className="wow fadeIn" data-wow-delay="0.1s"><Link to="#">About Us</Link></h3>
    <ul className="linksbx wow fadeInUp" data-wow-delay="0.3s">
      <li><Link to="#">Careers</Link></li>
      <li><Link to="#">Blog</Link></li>
      <li><Link to="#">Contact Us</Link></li>
    </ul>
</div>

  <div className="col-6 col-md-3">
      <div className="addressbx">
        <h3 className="wow fadeIn" data-wow-delay="0.1s">Customer Service Call Center </h3>
        <p className="wow fadeIn" data-wow-delay="0.2s">Customer Service - <Link to="tel:462372">462372</Link> <br/>
              Monday-Friday 08:00-20:00 &amp;
              Sunday 09:00-20:00</p>
        <p className="wow fadeIn" data-wow-delay="0.2s">Claims - <Link to="tel:800462372">800 462372</Link> <br/>
        Sunday-Friday 09:00-17:00</p>
      </div>
  </div>
  </div>
</div>  

<div className="botfooter">
 <div className="container">
 <p>&copy; RSA. All rights reserved, 2022</p>
</div>  
</div>
</footer>
</>
)

export default Footer
