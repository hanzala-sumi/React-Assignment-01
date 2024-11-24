
import SocialImg from '../../assets/images/social.png';
import Form from 'react-bootstrap/Form';
function Footer() {
  return (
    <footer className="py-5">
        <div className="container">
            <div className="row pb-5 city-sec">
                <div className="col-12">
                    <h4 className="mb-4 foot-heading">Our top cities</h4>
                    <ul className="cities">
                        <li>San Francisco</li>
                        <li>Miami</li>
                        <li>San Diego</li>
                        <li>East Bay</li>
                        <li>Long Beach</li>
                        <li>Los Angeles</li>
                        <li>Washington DC</li>
                        <li>Seattle</li>
                        <li>Portland</li>
                        <li>Nashville</li>
                        <li>New York City</li>
                        <li>Orange County</li>
                        <li>Atlanta</li>
                        <li>Charlotte</li>
                        <li>Denver</li>
                        <li>Chicago</li>
                        <li>Phoenix</li>
                        <li>Las Vegas</li>
                        <li>Sacramento</li>
                        <li>Oklahoma City</li>
                        <li>Columbus</li>
                        <li>New Mexico</li>
                        <li>Albuquerque</li>
                        <li>Sacramento</li>
                        <li>New Orleans</li>
                    </ul>
                </div>

            </div>
            <div className="row pb-5 pt-5 city-sec">
                <div className="col-md-6">
                    <div className="row">
                        <div className="col-md-3">
                            <h4 className="mb-4 foot-heading">Company</h4>
                            <ul className="compn">
                                <li>About us</li>
                                <li>Team</li>
                                <li>Careers</li>
                                <li>Blog</li>
                            </ul>
                        </div>
                        <div className="col-md-3">
                            <h4 className="mb-4 foot-heading">Contact</h4>
                            <ul className="compn">
                                <li>Help & Support</li>
                                <li>Partner with us</li>
                                <li>Ride with us</li>
                            </ul>
                        </div>
                        <div className="col-md-3">
                            <h4 className="mb-4 foot-heading">Legal</h4>
                            <ul className="compn">
                                <li>Terms & Conditions</li>
                                <li>Refund & Cancellation</li>
                                <li>Privacy Policy</li>
                                <li>Cookie Policy</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 follow-sec">
                    <h4 className="mb-4 foot-heading text-uppercase">Follow Us</h4>
                    <img src={SocialImg} alt="" srcset="" />
                    <p className="mt-4 mb-4">Receive exclusive offers in your mailbox</p>
                    <Form className="subscribe-form">
                        <div className="input-group">
                            <span className="input-group-text text-white">
                                <i className="bi bi-envelope"></i>
                            </span>
                            <Form.Control type="email" className="form-control" placeholder="Enter your email" required />
                        </div>
                        <button type="submit" className="btn btn-subscribe">Subscribe</button>
                    </Form>
                </div>
            </div>
            <div className="row py-3">
                <div className="col-md-6">
                    <p>All rights Reserved @ SMIT, 2024</p>
                </div>
                <div className="col-md-6">
                    <p className="text-end">Made by: <b>Hanzala Ahmed</b></p>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer