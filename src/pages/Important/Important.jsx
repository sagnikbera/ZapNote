import React from "react";
import { Fragment } from "react";
import NavBar from "../../components/NavBar";
import SideBar from "../../components/SideBar";

const Important = () => {
  return (
    <>
      <>
        <Fragment>
          <NavBar />
          <main className="flex gap-3">
            <SideBar />
          </main>
        </Fragment>
      </>
    </>
  );
};

export default Important;
