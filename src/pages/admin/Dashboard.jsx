import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import { ReactTabulator } from "react-tabulator";
import { useEffect, useState } from "react";
import AddProductModal from "../../components/AddProductModal";
import { useSelector } from "react-redux";
import "react-tabulator/lib/styles.css";
import "react-tabulator/css/bootstrap/tabulator_bootstrap.min.css";
import SideBar from "../../components/adminSideBar";
function Dashboard() {
  const auth = useSelector((state) => state.auth);

  return (
    <>
      <NavBar />

      <div className="row">
        <div className="col-2">
          <SideBar />
        </div>
        <div className="col-10">
          <h4>Welcome to Dashboard</h4>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Dashboard;
