import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import { ReactTabulator } from "react-tabulator";
import { useEffect, useState } from "react";
import OrderDetails from "../../components/OrderDetails";
import { useSelector } from "react-redux";
import "react-tabulator/lib/styles.css";
import "react-tabulator/css/bootstrap/tabulator_bootstrap.min.css";
import SideBar from "../../components/adminSideBar";
function Dashboard() {
  const auth = useSelector((state) => state.auth);
  const [data, setData] = useState([]);
  const [updatedRows, setUpdatedRows] = useState([]);
  const [deletedRows, setDeletedRows] = useState([]);
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
      title: "Delete",
      field: "delete",
      formatter: "buttonCross",
      hozAlign: "center",
      cellClick: (e, cell) => {
        const data = cell.getRow().getData();
        setDeletedRows((prev) => [...prev, data]);
        setData((prev) => {
          return prev.filter((row) => row.id !== data.id);
        });
      },
    },
    {
      title: "Dirección",
      field: "address",
      editor: "input",
    },
    {
      title: "Usuario",
      field: "userId",
    },
    {
      title: "Precio Total",
      field: "products",
      formatter: (cell) => {
        const { products } = cell.getRow().getData();
        console.log(products);
        let totalPrice = 0;
        for (const product of products) {
          totalPrice += product.price * product.qty;
        }
        return totalPrice;
      },
    },
    {
      title: "Estatus",
      field: "status",
      editor: "input",
    },
    {
      formatter: () => `<button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Ver detalles
      </button>`,
      hozAlign: "center",
      headerSort: false,
    },
  ];

  const handleCellEdited = (cell) => {
    const updatedRow = cell.getRow().getData();
    setUpdatedRows((prev) => {
      const updatedIndex = prev.findIndex((row) => row.id === updatedRow.id);

      if (updatedIndex >= 0) {
        const updatedRowsCopy = [...prev];
        updatedRowsCopy[updatedIndex] = updatedRow;
        return updatedRowsCopy;
      } else {
        return [...prev, updatedRow];
      }
    });
  };
  const handleSubmitClick = async () => {
    console.log("Updated Rows:", updatedRows);
    console.log("Deleted Rows:", deletedRows);
    for (const row of updatedRows) {
      await fetch(`${import.meta.env.VITE_API_URL}/products/${row.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: auth.token,
        },
        body: JSON.stringify(row),
      });
    }
    for (const row of deletedRows) {
      await fetch(`${import.meta.env.VITE_API_URL}/products/${row.id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: auth.token,
        },
      });
    }
    console.log("actualizado");
  };

  return (
    <>
      <NavBar />
      <OrderDetails></OrderDetails>
      <div className="row">
        <div className="col-2">
          <SideBar />
        </div>
        <div className="col-10">
          <div className="container">
            <button className="btn btn-primary m-4" onClick={handleSubmitClick}>
              Guardar cambios
            </button>
            <ReactTabulator
              data={data}
              columns={columns}
              events={{ cellEdited: handleCellEdited }}
              options={{
                layout: "fitColumns",
                responsiveLayout: "collapse",
              }}
            />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Dashboard;
