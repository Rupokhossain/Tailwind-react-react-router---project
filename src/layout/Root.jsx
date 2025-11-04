
import TopHeader from "../Components/Header/TopHeader";
import Header from "../Components/Header/Header";
import { Outlet } from "react-router";
import Footer from "../Pages/Footer";



export const Root = () => {
  return (
    <div>
        <div>
          <TopHeader></TopHeader>
          <Header/>
        </div>
        <Outlet></Outlet>

        <Footer/>
    </div>
  );
};






