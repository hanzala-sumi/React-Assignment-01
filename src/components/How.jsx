import IconHow from '../../assets/images/Icon-how.png';
import IconHow2 from '../../assets/images/Icon-how2.png';
import IconHow3 from '../../assets/images/Icon-how3.png';
import IconHow4 from '../../assets/images/Icon-how4.png';
function How() {
  return (
    <section className="how py-5">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h3 className="how-heading">How does it work</h3>
                </div>
                <div className="col-md-3">
                    <div className="card-how text-center p-3">
                        <img src={IconHow} alt="" srcset="" />
                        <h4>Select location</h4>
                        <p>Choose the location where your food will be delivered.</p>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card-how p-3 text-center">
                        <img src={IconHow2} alt="" srcset="" />
                        <h4>Choose order</h4>
                        <p>Check over hundreds of menus to pick your favorite food.</p>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card-how p-3 text-center">
                        <img src={IconHow3} alt="" srcset="" />
                        <h4>Pay advanced</h4>
                        <p>It's quick, safe, and simple. Select several methods of payment</p>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card-how p-3 text-center">
                        <img src={IconHow4} alt="" srcset="" />
                        <h4>Enjoy meals</h4>
                        <p>Food is made and delivered directly to your home.</p>
                    </div>
                </div>
            </div>

        </div>
    </section>
  )
}

export default How