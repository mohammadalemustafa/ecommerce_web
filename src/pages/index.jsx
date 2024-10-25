import React from 'react'
import MyAccount from '../components/MyAccount/Index'
import Container from '../ui/Container'
import BlogCatGrid from '../components/BlogCategoryGrid'
import AboutpCart from '../components/aboutproduct'
import Secondlast from '../components/Secondlast'
import Banner2 from '../components/Banner2'
import { secondlastdata } from '../data/Secondlast'
import { carddata } from '../data/aboutpCartdata'
import banner from "../assets/banner-13.png";
import bannerbg from "../assets/banner10.png";

const MyProfile = () => {
  return (
    <>
      <Container>
      <MyAccount/>
      
      </Container>
    </>
  )
}

export default MyProfile
