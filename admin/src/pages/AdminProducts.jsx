import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { ReactTabulator } from "react-tabulator";
import { useEffect, useState } from "react";
import AddProductModal from "../components/AddProductModal";
import { useSelector } from "react-redux";
import "react-tabulator/lib/styles.css";
import "react-tabulator/css/bootstrap/tabulator_bootstrap.min.css";
import SideBar from "../components/adminSideBar";
function Dashboard() {
  const auth = useSelector((state) => state.auth);
  const [data, setData] = useState([]);
  const [updatedRows, setUpdatedRows] = useState([]);
  const [deletedRows, setDeletedRows] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          import.meta.env.VITE_API_URL + "/products"
        );
        if (!response.ok) {
          throw new Error("API fetch error, !ok");
        }
        const { products } = await response.json();

        setData(products);
      } catch (error) {
        throw new Error(error);
      }
    };

    fetchData();
  }, []);
  const columns = [
    {
      headerSort: false,
      formatter: "buttonCross",
      hozAlign: "center",
      cellClick: (e, cell) => {
        const data = cell.getRow().getData();
        setDeletedRows((prev) => [...prev, data]);
        setData((prev) => {
          return prev.filter((row) => row.id !== data.id);
        });
      },
      headerFilter: false,
    },
    {
      title: "Pic",
      field: "pic",
      formatter: (cell) => {
        const imgUrl = import.meta.env.VITE_IMG_PATH;
        return `<img src="${imgUrl}${cell.getValue()}" style="height:50px;width:50px;">`;
      },
      formatterParams: {
        height: "100px", // Altura de la imagen
        width: "100px", // Ancho de la imagen
      },
      editor: "input",
      headerFilter: false,
    },
    {
      title: "Nombre",
      field: "name",
      editor: "input",
    },
    {
      title: "Category",
      field: "categoryId",
      editor: "number",
    },
    {
      title: "Price",
      field: "price",
      editor: "input",
    },
    {
      title: "Stock",
      field: "stock",
      editor: "input",
    },
    {
      title: "Description",
      field: "description",
      editor: "input",
      width: 700,
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

      <div className="row">
        <div className="col-2">
          <SideBar />
        </div>
        <div className="col-10">
          <div className="container">
            <button className="btn btn-primary m-4" onClick={handleSubmitClick}>
              Guardar cambios
            </button>
            <AddProductModal setData={setData}></AddProductModal>

            <ReactTabulator
              data={data}
              columns={columns}
              events={{ cellEdited: handleCellEdited }}
              options={{
                layout: "fitColumns",
                responsiveLayout: "hide",
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
