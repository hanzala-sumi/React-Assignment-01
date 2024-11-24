import RightImg from '../../assets/images/Right.png';
import LeftImg from '../../assets/images/Left.png';
function Deal() {
  return (
    <section className="py-5 mt-5 mb-5">
        <div className="container">
            <div className="row crispy-sec">
                <div className="col-md-5 p-5">
                    <h2 className="mb-4 crispy-heading">Best deals <span className="color-yelloo">Crispy Sandwiches</span></h2>
                    <p className="mb-5 crispy-pera">Enjoy the large size of sandwiches. Complete
                        perfect slice of sandwiches.</p>
                    <button className="crispy-btn">Proceed to order</button>
                </div>
                <div className="col-md-7 p-0">
                    <img className="" width="100%" src={RightImg} alt="" srcset="" />
                </div>
            </div>
            <div className="row crispy-sec mt-5">
                <div className="col-md-7 p-0">
                    <img className="" width="100%" src={LeftImg} alt="" srcset="" />
                </div>
                <div className="col-md-5 p-5">
                    <h2 className="mb-4 crispy-heading">Celebrate parties
                        with <span className="color-yelloo">Fried Chicken</span></h2>
                    <p className="mb-5 crispy-pera">Get the best fried chicken smeared with a lip smacking lemon chili
                        flavor. Check out
                        best deals for fried chicken.</p>
                    <button className="crispy-btn">Proceed to order</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Deal