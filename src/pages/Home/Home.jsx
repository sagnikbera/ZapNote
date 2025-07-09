import React from "react";
import { Fragment } from "react";
import NavBar from "../../components/NavBar";
import SideBar from "../../components/SideBar";
import InputBox from "../../components/InputBox/InputBox";

const Home = () => {
  return (
    <>
      <Fragment >
        <NavBar/>
        <main className="flex gap-3">
          <SideBar/>
          <InputBox/>
        </main>
      </Fragment>
    </>
  );
};

export default Home;
