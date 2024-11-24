import Form from 'react-bootstrap/Form';
import Bannerimg from '../../assets/images/banner-img.png';
function Banner() {
  return (
    <section className="banner">
        <div className="container">
            <div className="row align-items-end conn">
                <div className="col-6 pb-5">
                    <h1 className="banner-heading">Are you starving?</h1>
                    <p>Within a few clicks, find meals that are accessible near you</p>
                    <div className="banner-pickup mb-5">
                        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill"
                                    data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home"
                                    aria-selected="true"><i className="bi bi-bicycle"></i> Delivery</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill"
                                    data-bs-target="#pills-profile" type="button" role="tab"
                                    aria-controls="pills-profile" aria-selected="false"><i className="bi bi-basket2"></i>
                                    Pickup</button>
                            </li>

                        </ul>
                        <div className="tab-content" id="pills-tabContent">
                            <div className="tab-pane fade show active" id="pills-home" role="tabpanel"
                                aria-labelledby="pills-home-tab">
                                <Form className="row g-3">
                                    <div className="col-md-9">
                                        <Form.Control className="form-control" type="text" placeholder="Enter Your Address" />
                                    </div>
                                    <div className="col-md-3">
                                        <button type="submit" className="btn btn-main"><i className="bi bi-search"></i> Find
                                            Food</button>
                                    </div>
                                </Form>
                            </div>
                            <div className="tab-pane fade" id="pills-profile" role="tabpanel"
                                aria-labelledby="pills-profile-tab">
                                <Form className="row g-3">
                                    <div className="col-md-9">
                                        <Form.Control className="form-control" type="text" placeholder="Enter Your Address" />
                                    </div>
                                    <div className="col-md-3">
                                        <button type="submit" className="btn btn-main"><i className="bi bi-search"></i> Find
                                            Food</button>
                                    </div>
                                </Form>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <img className="w-100" src={Bannerimg} alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Banner