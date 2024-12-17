import React, { Suspense, useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authAction } from "./Store/auth";
import Loader from "./Loader/loader";
import User from "./Admin/User";
import AllUsers from "./Admin/AllUsers";
import Role from "./Admin/Roll";
import AddProducts from "./Admin/Products/AddProducts/Index";
import AllProducts from "./Admin/Products/AllProducts/Index";
const Home = React.lazy(() => import('./pages/Home'));
const Public = React.lazy(() => import('./routes/Public'));
const MyProfile = React.lazy(() => import('./pages'));
const BlogCatGrid = React.lazy(() => import('./components/BlogCategoryGrid'));
const SinglePostRight = React.lazy(() => import('./components/SinglePostRight/Index'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Forgotpass = React.lazy(() => import('./pages/Forgotpassword'));
const ResetPass = React.lazy(() => import('./pages/Resetpass'));
const PrivacyPolicy = React.lazy(() => import('./pages/Privacy'));
const TermsAndConditions = React.lazy(() => import('./pages/Terms'));
const Invoice = React.lazy(() => import('./pages/Invoice'));
const About = React.lazy(() => import('./pages/About'));
const PageNOT = React.lazy(() => import('./pages/PageNotFonud'));
const ShopGrid = React.lazy(() => import('./components/ShopGrid/Index'));
const Shoplist = React.lazy(() => import('./components/ShopList/Index'));
const ShopWide = React.lazy(() => import('./components/ShopWide/Index'));
const VendorGrid = React.lazy(() => import('./components/Venders/Index'));
const VendorList = React.lazy(() => import('./components/Venders/VendorList/Index'));
const VendorDetails1 = React.lazy(() => import('./components/Venders/VendorDetail1/Index'));
const VendorDetail2 = React.lazy(() => import('./components/Venders/VendorDetail2/Index'));
const VendorDashboard = React.lazy(() => import('./components/VendorDashboard/Index'));
const VendorGuid = React.lazy(() => import('./components/Venders/VendorGuid/Index'));
const SingleProducts = React.lazy(() => import('./pages/SinglePageProduct'));
const CompareProduct = React.lazy(() => import('./components/CompareProduct'));
const WishList = React.lazy(() => import('./WishList'));
const Dashboard = React.lazy(() => import('./Admin/Dashboard'));
const Private = React.lazy(() => import('./Admin/Private'))
function App() {
  const dispatch = useDispatch();
  const token = JSON.parse(localStorage.getItem("login"));
  const isStateChange = useSelector((state) => state.auth.isStateChange);
  const getData = async () => {
    const res = await fetch("https://ecommerce-web-69896-default-rtdb.firebaseio.com/users.json");
    let data = await res.json();
    let newArr = [];
    for (const d in data) {
      newArr.push(data[d]);
    }
    dispatch(authAction.onGetAllUser(newArr));
  };
  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    dispatch(authAction.onAddToken(token));
  }, [isStateChange]);
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/myprofile" element={<Public element={<MyProfile />} />} />
        <Route path="/about" element={<Public element={<About />} />} />
        <Route path="/BlogCategoryGrid" element={<Public element={<BlogCatGrid />} />} />
        <Route path="/SinglePostRight" element={<Public element={<SinglePostRight />} />} />
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Public element={<Home />} />} />
        <Route path="/contact" element={<Public element={<Contact></Contact>} />} />
        <Route path="/singleProduct" element={<Public element={<SingleProducts></SingleProducts>} />} />
        <Route path="/forgotpass" element={<Public element={<Forgotpass></Forgotpass>} />} />
        <Route path="/resetpass" element={<Public element={<ResetPass></ResetPass>} />} />
        <Route path="*" element={<Public element={<PageNOT></PageNOT>} />} />
        <Route path="/privacy" element={<Public element={<PrivacyPolicy />} />} />
        <Route path="/TemsAndCondition" element={<Public element={<TermsAndConditions />} />} />
        <Route path="/invoice" element={<Public element={<Invoice />} />} />
        <Route path="/shopgrid" element={<Public element={<ShopGrid />} />} />
        <Route path="/shoplist" element={<Public element={<Shoplist />} />} />
        <Route path="/shopwide" element={<Public element={<ShopWide />} />} />
        <Route path="/vendorgrid" element={<Public element={<VendorGrid />} />} />
        <Route path="/vendorlist" element={<Public element={<VendorList />} />} />
        <Route path="/vendordetail1" element={<Public element={<VendorDetails1 />} />} />
        <Route path="/vendordetail2" element={<Public element={<VendorDetail2 />} />} />
        <Route path="/vendordashboard" element={<Public element={<VendorDashboard />} />} />
        <Route path="/vendorguid" element={<Public element={<VendorGuid />} />} />
        <Route path="/compare" element={<Public element={<CompareProduct />} />} />
        <Route path="/wishlists" element={<Public element={<WishList />} />} />
        <Route path="/admin/dash" element={<Private element={<Dashboard />} />} />
        <Route path="/add/user" element={<Private element={<User />} />} />
        <Route path="/alluser" element={<Private element={<AllUsers />} />} />
        <Route path="/roll" element={<Private element={<Role />} />} />
        <Route path="/add/products" element={<Private element={<AddProducts />} />} />
        <Route path="/all/products" element={<Private element={<AllProducts />} />} />
      </Routes>
    </Suspense>
  );
}
export default App;
