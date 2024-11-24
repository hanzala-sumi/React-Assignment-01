import Banner from "../components/Banner"
import Deal from "../components/Deal"
import How from "../components/How"
import Offer from "../components/Offer"
import ReadyOrder from "../components/ReadyOrder"

function Home() {
  return (
    <div>
        <Banner />
        <Offer />
        <How />
        <Deal />
        <ReadyOrder />
    </div>
  )
}

export default Home