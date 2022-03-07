import { Link } from "gatsby"
import React, {useState} from "react"
import Layout from "../components/layout"
import ReCAPTCHA from "react-google-recaptcha";


export default function ContactPage() {

const [count, setCount] = useState(0);

const onSubmit = (e) => {
  e.preventDefault();
  setCount(count + 1);
};

  return (
    <Layout>
    <section className="contentbx contactsec greybg pt-0">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-5 col-xl-4">
              <div className="leftbx">
                <h2 className="wow fadeIn">Contact us</h2>
                <div className="addressbx wow fadeIn" data-wow-delay="0.1s">
                  <h4 className="location"><Link to="https://www.google.com/maps/place/RSA+(Royal+%26+Sun+Alliance+Insurance)/@26.2382143,50.5402591,15z/data=!4m12!1m6!3m5!1s0x0:0x8a762d4f397ed8a4!2sRSA+(Royal+%26+Sun+Alliance+Insurance)!8m2!3d26.2381942!4d50.5402589!3m4!1s0x0:0x8a762d4f397ed8a4!8m2!3d26.2381942!4d50.5402589" target="_blank">Customer Branch location</Link></h4>
                  <p>
                    <strong>Office No. 21, 2nd Floor, <br />
                      Impact House, P O Box 11871 <br />
                      Building No. 662,</strong> <br />
                    Road No. 2811, Block No. 428,
                    Al Seef District, Kingdom of Bahrain
                  </p>
                  <p>Email: <Link to="mailto:rsainfo@bh.rsagroup.com">rsainfo@bh.rsagroup.com</Link></p>
                  <div className="imgbx">
                    <Link to="https://www.google.com/maps/place/RSA+(Royal+%26+Sun+Alliance+Insurance)/@26.2382143,50.5402591,15z/data=!4m12!1m6!3m5!1s0x0:0x8a762d4f397ed8a4!2sRSA+(Royal+%26+Sun+Alliance+Insurance)!8m2!3d26.2381942!4d50.5402589!3m4!1s0x0:0x8a762d4f397ed8a4!8m2!3d26.2381942!4d50.5402589" target="_blank"><img src="/images/rsa-map.jpg" alt="img" /></Link>
                  </div>
                </div>
                <div className="addressbx wow fadeIn" data-wow-delay="0.2s">
                  <h4 className="callnow"><Link to="tel:80001 RSA (772)">Call now</Link></h4>
                  <p className="d-flex"><span className="textlabel">Tollfree</span> <span className="textdetail"><Link to="tel:80001 RSA (772)" className="borderbx">80001 RSA (772)</Link></span></p>
                  <p className="d-flex mb-0"><span className="textlabel">Landline</span> <span className="textdetail"><Link to="tel:+973 17581661">+973 17581661</Link></span> </p>
                  <p className="d-flex"><span className="textlabel">Fax</span> <span className="textdetail"><Link to="tel:+973 17582622">+973 17582622</Link></span> </p>
                  <p className="d-flex"><span className="textlabel">Timings</span> <span className="textdetail">8:00am to 4:00pm, <br /> Sunday to Thursday</span> </p>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-xl-7">
              <div className="formbx wow fadeIn" data-wow-delay="0.3s">
                <h2 className="fpurple">Submit your query</h2>

                <form onSubmit={onSubmit}>
                  <div className="form-group">
                    <input type="text" className="form-control error" placeholder="Full Name" />
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control success" placeholder="Company Name" />
                  </div>
                  <div className="form-group">
                    <input type="email" className="form-control" placeholder="Email" />
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Phone Number" />
                  </div>
                  <div className="form-group">
                    <textarea className="form-control" name="text" placeholder={count}></textarea>
                  </div>
                  <div className="form-group">
                  <ReCAPTCHA sitekey="Your client site key" />
                  </div>
                  <button type="submit" className="btn btnlarge">Submit</button>
                </form>

              </div>
            </div>
          </div>
        </div>
      </section>
      </Layout>
  )
}
