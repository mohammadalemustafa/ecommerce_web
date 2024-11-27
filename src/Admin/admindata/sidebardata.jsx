import { MdDashboard, MdLocalTaxi, MdPages, MdReviews, MdSettings } from "react-icons/md";
import { FaBlog, FaJediOrder, FaQq, FaShippingFast, FaStoreAlt, FaUserShield } from "react-icons/fa";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { LiaStoreSolid } from "react-icons/lia";
import { RiCoupon2Fill } from "react-icons/ri";
import { GoFileMedia } from "react-icons/go";
import { BsCurrencyBitcoin, BsWallet } from "react-icons/bs";
import { VscActivateBreakpoints } from "react-icons/vsc";
export const sidebarData = [
    { id: 1, logo: <MdDashboard />, name: "dashboard" },
    { id: 2, logo: <FaUserShield />, name: "users" },
    { id: 3, logo: <MdOutlineProductionQuantityLimits />, name: "products" },
    { id: 4, logo: <LiaStoreSolid />, name: "stores" },
    { id: 5, logo: <FaJediOrder />, name: "orders" },
    { id: 6, logo: <GoFileMedia />, name: "media" },
    { id: 7, logo: <FaBlog />, name: "blog" },
    { id: 8, logo: <MdPages />, name: "pages" },
    { id: 9, logo: <MdLocalTaxi />, name: "taxes" },
    { id: 10, logo: <FaShippingFast />, name: "shiping" },
    { id: 11, logo: <RiCoupon2Fill />, name: "coupons" },
    { id: 12, logo: <BsCurrencyBitcoin />, name: "currencies" },
    { id: 13, logo: <VscActivateBreakpoints />, name: "points" },
    { id: 14, logo: <BsWallet />, name: "wallet" },
    { id: 16, logo: <MdReviews />, name: "reviews" },
    { id: 17, logo: <FaQq />, name: "faqs" },
    { id: 18, logo: <FaStoreAlt />, name: "store front" },
    { id: 19, logo: <MdSettings />, name: "settings" },
];