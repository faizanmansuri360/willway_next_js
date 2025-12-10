import { useEffect, useState } from "react";

import { Link } from "react-router-dom"
// import Search from "./Search"
// import headerlogo from "../../assets/header-dog.webp";
// import { getCategory } from "../../API/ApisHome";
import { getCategorywithproduct } from "../../API/ApisHome";
// import { useSelector } from "react-redux";



const Navbar = () => {
  const [getcategory, SetgetCategory] = useState();
  // const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  // const [isNavbarOpenchild, setIsNavbarOpenchild] = useState(false);
  // const userDetailsString = useSelector((state) => state.user.userDetails);

  // const toggleNavbar = () => {
  //   setIsNavbarOpen((prevState) => !prevState);
  // };
  // const toggleNavbarchild = () => {
  //   setIsNavbarOpenchild((prevState) => !prevState);
  // };

  // useEffect(() => {
  //   getCategorywithproduct().then((res) => {
  //     SetgetCategory(res);
  //     console.log(res);
  //   }).catch((err) => {
  //     console.log(err);
  //   });
  // }, []);

  return (
    <>
   
    </>
  )
}

export default Navbar
