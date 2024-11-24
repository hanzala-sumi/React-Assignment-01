import offer01 from '../../assets/images/offer-01.png';
import offer02 from '../../assets/images/offer-02.png';
import offer03 from '../../assets/images/offer-03.png';
import offer04 from '../../assets/images/offer-04.png';
function Offer() {
  return (
    <section className="offer">

    <div className="container">
        <div className="row gx-2 pt-5 pb-5 mt-4">
            <div className="col-3">
                <figure className="offer-card">
                    <img className="w-100 rounded-3" src={offer01} alt="offer" />
                    <figcaption className="p-1">
                        <div className="row align-items-center">
                            <div className="col-7">
                                <h3 className="percentage">15</h3>
                            </div>
                            <div className="col-5">
                                <p className="mb-0">%</p>
                                <p className="mb-0">Off</p>
                            </div>
                        </div>
                    </figcaption>
                    <h4 className="off-heading mt-4">Greys Vage</h4>
                    <p className="mt-4"><span className="off-day rounded-3 p-2">6 Days Remaining</span></p>
                </figure>

            </div>
            <div className="col-3">
                <figure className="offer-card">
                    <img className="w-100 rounded-3" src={offer02} alt="offer" />
                    <figcaption className="p-1">
                        <div className="row align-items-center">
                            <div className="col-7">
                                <h3 className="percentage">15</h3>
                            </div>
                            <div className="col-5">
                                <p className="mb-0">%</p>
                                <p className="mb-0">Off</p>
                            </div>
                        </div>
                    </figcaption>
                    <h4 className="off-heading mt-4">Greys Vage</h4>
                    <p className="mt-4"><span className="off-day rounded-3 p-2">6 Days Remaining</span></p>
                </figure>

            </div>
            <div className="col-3">
                <figure className="offer-card">
                    <img className="w-100 rounded-3" src={offer03} alt="offer" />
                    <figcaption className="p-1">
                        <div className="row align-items-center">
                            <div className="col-7">
                                <h3 className="percentage">15</h3>
                            </div>
                            <div className="col-5">
                                <p className="mb-0">%</p>
                                <p className="mb-0">Off</p>
                            </div>
                        </div>
                    </figcaption>
                    <h4 className="off-heading mt-4">Greys Vage</h4>
                    <p className="mt-4"><span className="off-day rounded-3 p-2">6 Days Remaining</span></p>
                </figure>

            </div>
            <div className="col-3">
                <figure className="offer-card">
                    <img className="w-100 rounded-3" src={offer04} alt="offer" />
                    <figcaption className="p-1">
                        <div className="row align-items-center">
                            <div className="col-7">
                                <h3 className="percentage">15</h3>
                            </div>
                            <div className="col-5">
                                <p className="mb-0">%</p>
                                <p className="mb-0">Off</p>
                            </div>
                        </div>
                    </figcaption>
                    <h4 className="off-heading mt-4">Greys Vage</h4>
                    <p className="mt-4"><span className="off-day rounded-3 p-2">6 Days Remaining</span></p>
                </figure>

            </div>
        </div>
    </div>
</section>
  )
}

export default Offer