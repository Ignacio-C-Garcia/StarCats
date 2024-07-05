import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import { ReactTabulator } from "react-tabulator";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "react-tabulator/lib/styles.css";
import "react-tabulator/css/bootstrap/tabulator_bootstrap.min.css";
import SideBar from "../../components/adminSideBar";
import { TabulatorFull as Tabulator } from "tabulator-tables"; // Import Tabulator
import "./NestedTable.css"; // Custom styles for tables
function Dashboard() {
  const auth = useSelector((state) => state.auth);
  const [data, setData] = useState([
    {
      userId: 1,
      status: "Pending",
      address: "Casavalle",
      products: [
        { id: 1, price: 12, qty: 4, subtotal: 48 },
        { id: 2, price: 17, qty: 2, subtotal: 34 },
      ],
    },
    {
      userId: 2,
      status: "Pending",
      address: "Cerro",
      products: [
        { id: 4, price: 1, qty: 40, subtotal: 40 },
        { id: 7, price: 22, qty: 1, subtotal: 22 },
      ],
    },
  ]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(import.meta.env.VITE_API_URL + "/orders", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: auth.token,
          },
        });
        if (!response.ok) {
          throw new Error("API fetch error, !ok");
        }
        const { orders } = await response.json();
        console.log(orders);
        setData(orders);
      } catch (error) {
        throw new Error(error);
      }
    };

    fetchData();
  }, []);

  const columns = [
    {
      title: "Usuario",
      field: "user",
      formatter: (cell) => {
        return cell.getRow().getData().user.name;
      },
    },
    { title: "Estatus", field: "status" },
    { title: "Direccion", field: "address" },
  ];

  const nestedColumns = [
    {
      title: "Product Name",
      field: "name",
    },
    { title: "Product Price", field: "price" },
    { title: "Quantity", field: "qty" },
  ];
  const rowFormatter = (row) => {
    const element = row.getElement(); // Get row element
    const data = row.getData(); // Get row data

    if (data.products && data.products.length > 0) {
      const nestedTable = document.createElement("div");
      nestedTable.style.margin = "10px 0";
      nestedTable.className = "nested-table";
      element.appendChild(nestedTable);

      new Tabulator(nestedTable, {
        data: data.products,
        columns: nestedColumns,
        layout: "fitColumns",
      });
    }
  };
  return (
    <>
      <NavBar />
      <div className="row">
        <div className="col-2">
          <SideBar />
        </div>
        <div className="col-10">
          <div className="">
            <h3>Parent Table</h3>
            <div className="tabulator-wrapper">
              <ReactTabulator
                data={data}
                columns={columns}
                layout="fitColumns"
                rowFormatter={rowFormatter}
                options={{
                  responsiveLayout: "hide",
                  height: "500px",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Dashboard;
