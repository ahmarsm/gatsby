import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"


export default function IndexPage() {

  var heroSlide = {
    autoplay: true,
    autoplaySpeed: 8000,
    fade: true,
    dots: true,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  var productSlide = {
    autoplay: true,
    autoplaySpeed: 5000,
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 600,
      settings: {
        autoplay: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  };

  return (
    <Layout>

      <SEO title="This is a home page" />

      <section className="herobx" id="home">
        <Slider {...heroSlide}>
          <div className="item">
            <div className="imgbx"><img className="img-fluid" src="./images/hero.jpg" alt="img" /></div>
            <div className="bannermain">
              <div className="container">
                <div className="bannertext">
                  <h1 className="wow fadeInLeft"><span>Car Insurance</span> RSA research reveals travelling has now gone the social media way </h1>
                  <div className="btnbx">
                    <Link to="#/" className="btn">Get a quote</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </section>
      {/* <!--Slider End--> */}


      {/* <!--Products Start--> */}
      <section className="contentbx productsec">
        <div className="container">
          <Slider {...productSlide}>
            <div className="item">
              <div className="prodbx boxshadow wow fadeInUp" data-wow-delay="0.1s">
                <div className="imgbx">
                  <img className="img-fluid" src="./images/prod-car.jpg" alt="img" />
                  <h3><strong>Car</strong> Insurance</h3>
                </div>
                <div className="textbx">
                  <h4>Single trip cover for as little as BD 5</h4>
                  <p>Customise your travel insurance needs with our single trip or annual travel cover.</p>
                  <Link to="#/" className="btn btnblank">Read More</Link>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="prodbx boxshadow wow fadeInUp" data-wow-delay="0.3s">
                <div className="imgbx">
                  <img className="img-fluid" src="./images/prod-car.jpg" alt="img" />
                  <h3><strong>Property</strong> Insurance</h3>
                </div>
                <div className="textbx">
                  <h4>For stronger ipsum foundations</h4>
                  <p>Protect your business today, regardless of size, locale or scale of risk.</p>
                  <Link to="#/" className="btn btnblank">Read More</Link>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="prodbx boxshadow wow fadeInUp" data-wow-delay="0.4s">
                <div className="imgbx">
                  <img className="img-fluid" src="./images/prod-car.jpg" alt="img" />
                  <h3><strong>Business</strong> Insurance</h3>
                </div>
                <div className="textbx">
                  <h4>For you and your <br /> business</h4>
                  <p>An award winning cover from one of the world’s leading general insurers.</p>
                  <Link to="#/" className="btn btnblank">Read More</Link>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="prodbx boxshadow wow fadeInUp" data-wow-delay="0.4s">
                <div className="imgbx">
                  <img className="img-fluid" src="./images/prod-car.jpg" alt="img" />
                  <h3><strong>Business</strong> Insurance</h3>
                </div>
                <div className="textbx">
                  <h4>For you and your <br /> business</h4>
                  <p>An award winning cover from one of the world’s leading general insurers.</p>
                  <Link to="#/" className="btn btnblank">Read More</Link>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>
      {/* <!--Products End--> */}



      {/* <!--Faq's Start--> */}
      <div className="curvebx mb-m1"><img className="img-fluid" src="./images/curve-top.png" alt="img" /></div>

      <section className="contentbx faqsec purplebg">
        <div className="container">

          <h2 className="wow fadeIn" data-wow-delay="0.2s">Frequently asked questions</h2>

          <div className="faqlisting">
            <div className="faqsingle wow fadeIn" data-wow-delay="0.1s">
              <h4>I have a comprehensive car insurance policy. What will it cover?</h4>
              <div className="textbx">
                <p>Your comprehensive car insurance policy covers you against loss, damage and third-party liability. You are also protected against:</p>
                <ul className="listbx">
                  <li>Damage to your motor vehicle due to accidental collision, overturning, fire, external explosion, self-ignition, theft, or a malicious act unless specifically excluded.</li>
                  <li>Accrued legal liability and agreed costs and expenses against third party bodily injury/ property damage arising out of use of motor vehicles unless specifically excluded.</li>
                </ul>
                <p>Due to the large number of accidents on the roads, we always advise our customers to opt for the comprehensive car insurance policy. Request a quote for your car today.</p>
              </div>
            </div>
            <div className="faqsingle wow fadeIn" data-wow-delay="0.2s">
              <h4>I only have a third party liability policy. What will it cover?</h4>
              <div className="textbx">
                <p>Your comprehensive car insurance policy covers you against loss, damage and third-party liability. You are also protected against:</p>
                <ul className="listbx">
                  <li>Damage to your motor vehicle due to accidental collision, overturning, fire, external explosion, self-ignition, theft, or a malicious act unless specifically excluded.</li>
                  <li>Accrued legal liability and agreed costs and expenses against third party bodily injury/ property damage arising out of use of motor vehicles unless specifically excluded.</li>
                </ul>
                <p>Due to the large number of accidents on the roads, we always advise our customers to opt for the comprehensive car insurance policy. Request a quote for your car today.</p>
              </div>
            </div>
            <div className="faqsingle wow fadeIn" data-wow-delay="0.3s">
              <h4>I have just had an accident. What do I need to do to apply for a claim?</h4>
              <div className="textbx">
                <p>Your comprehensive car insurance policy covers you against loss, damage and third-party liability. You are also protected against:</p>
                <ul className="listbx">
                  <li>Damage to your motor vehicle due to accidental collision, overturning, fire, external explosion, self-ignition, theft, or a malicious act unless specifically excluded.</li>
                  <li>Accrued legal liability and agreed costs and expenses against third party bodily injury/ property damage arising out of use of motor vehicles unless specifically excluded.</li>
                </ul>
                <p>Due to the large number of accidents on the roads, we always advise our customers to opt for the comprehensive car insurance policy. Request a quote for your car today.</p>
              </div>
            </div>
            <div className="faqsingle wow fadeIn" data-wow-delay="0.4s">
              <h4>I have a comprehensive car insurance policy. What will it cover?</h4>
              <div className="textbx">
                <p>Your comprehensive car insurance policy covers you against loss, damage and third-party liability. You are also protected against:</p>
                <ul className="listbx">
                  <li>Damage to your motor vehicle due to accidental collision, overturning, fire, external explosion, self-ignition, theft, or a malicious act unless specifically excluded.</li>
                  <li>Accrued legal liability and agreed costs and expenses against third party bodily injury/ property damage arising out of use of motor vehicles unless specifically excluded.</li>
                </ul>
                <p>Due to the large number of accidents on the roads, we always advise our customers to opt for the comprehensive car insurance policy. Request a quote for your car today.</p>
              </div>
            </div>
            <div className="faqsingle wow fadeIn" data-wow-delay="0.5s">
              <h4>In case of a claim, will you be able to provide me with an alternative car to use while mine is in the garage?</h4>
              <div className="textbx">
                <p>Your comprehensive car insurance policy covers you against loss, damage and third-party liability. You are also protected against:</p>
                <ul className="listbx">
                  <li>Damage to your motor vehicle due to accidental collision, overturning, fire, external explosion, self-ignition, theft, or a malicious act unless specifically excluded.</li>
                  <li>Accrued legal liability and agreed costs and expenses against third party bodily injury/ property damage arising out of use of motor vehicles unless specifically excluded.</li>
                </ul>
                <p>Due to the large number of accidents on the roads, we always advise our customers to opt for the comprehensive car insurance policy. Request a quote for your car today.</p>
              </div>
            </div>
          </div>
          {/* <!-- faqlisting --> */}

          <div className="btnbx text-center pt-3 pt-md-5"><Link to="#/" className="btn btnlarge orangered">View all</Link></div>

        </div>
      </section>

      <div className="curvebx mt-m1"><img className="img-fluid" src="./images/curve-bottom.png" alt="img" /></div>
      {/* <!-- Faq's End --> */}



      {/* <!--Blog Start--> */}
      <section className="contentbx blogsec">
        <div className="container">
          <h2 className="fpurple">Blog</h2>
          <div className="row">
            <div className="col-md-12 col-lg-8">
              <div className="blogbx boxshadow wow fadeInUp" data-wow-delay="0.1s">
                <div className="imgbx">
                  <img className="img-fluid" src="./images/blog-bg.jpg" alt="img" />
                  <div className="textbx">
                    <h3><Link to="#/"><strong>Car Insurance</strong>  RSA research reveals travelling has now gone the social media way</Link></h3>
                    <p className="datebx">Dec 5, 2021</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-4">
              <div className="row h100">
                <div className="col-md-6 col-lg-12">
                  <div className="blogbx boxshadow wow fadeInUp" data-wow-delay="0.3s">
                    <div className="textbx">
                      <h3><Link to="#/"><strong>Car Insurance</strong>  Three MEPRA Wins For RSA's PR Campaign</Link></h3>
                      <p className="datebx">Dec 5, 2021</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-12">
                  <div className="blogbx boxshadow wow fadeInUp" data-wow-delay="0.5s">
                    <div className="textbx">
                      <h3><Link to="#/"><strong>Car Insurance</strong>  With VAT Here to Stay, It’s More Important Than Ever to Secure a Quality Insurance Plan From a Trusted Provider</Link></h3>
                      <p className="datebx">Dec 5, 2021</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="btnbx text-center pt-5"><Link to="#/" className="btn btnlarge">View all blog</Link></div>
        </div>
      </section>
      {/* <!--Blog End--> */}
    </Layout>

  )
}
