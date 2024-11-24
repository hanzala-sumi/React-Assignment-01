import Logo from '../../assets/images/Logo.png';

function Header() {
  return (
    <div>
     
    <header>
        <div className="container">
        <div className="row align-items-center pt-3 pb-3">
            <div className="col-3">
                    <img src={Logo} />
            </div>
            <div className="col-6">
                    <p className="mb-0 text-center"><strong>Deliver to:</strong> <i
                            className="bi bi-geo-alt-fill"></i> Current Location <strong>Mohammadpur Bus Stand,
                            Dhaka</strong></p>
            </div>
            <div className="col-3">
                    <div className="d-flex align-items-center justify-content-around">
                        <p className="mb-0"><i className="bi bi-search"></i> Search Food</p>
                        <a href="#" className="btn my-btn"><i className="bi bi-person-fill"></i> Login</a>
                    </div>
                </div>
        </div>
        </div>
    </header>

    </div>
  );
}

export default Header;
