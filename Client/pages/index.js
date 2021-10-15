import Banner from "../components/home/Banner/Banner";
import CashOnDelivery from "../components/home/Products/CashOnDelivery";
import ShopAndBrand from "../components/home/Products/ShopAndBrand";
import ShopbyStores from "../components/home/Products/ShopbyStores";
import Shops from "../components/home/Products/Shops";
export default function Home() {
  return (
    <div className="mb-5">
      <Banner />
      <Shops />
      <CashOnDelivery />
      <ShopbyStores />
      <ShopAndBrand />
    </div>
  );
}
