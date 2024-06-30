import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import "react-tabulator/lib/styles.css";
import { ReactTabulator } from "react-tabulator";
import { useEffect, useState, useRef } from "react";
import AddProductModal from "../components/AddProductModal";
import { useSelector } from "react-redux";
import style from "../styles/Dashboard.module.css";
import "react-tabulator/lib/styles.css";
import "react-tabulator/css/bootstrap/tabulator_bootstrap.min.css"; 
function Dashboard() {
  const tableRef = useRef(null);
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
        const data = await response.json();
        setData(data.products);
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
      width: 75,
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
      title: "Id",
      field: "id",
      editor: false,
      width: 50,
    },
    {
      title: "Pic",
      field: "pic",
      width: 80,
      editor: "input",
    },
    { title: "Nombre", field: "name", editor: "input", width: 250 },
    {
      title: "Category",
      field: "categoryId",
      width: 100,
      editor: "number",
    },
    {
      title: "Price",
      field: "price",
      width: 100,
      editor: "input",
    },
    {
      title: "Stock",
      field: "stock",
      width: 100,
      editor: "input",
    },
    {
      title: "Description",
      field: "description",
      editor: "input",
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
  const handleFilterChange = (e) => {
    const value = e.target.value;
    if (tableRef.current) {
      tableRef.current.table.setFilter("name", "like", value);
    }
  };
  return (
    <>
      <NavBar></NavBar>
      <button onClick={handleSubmitClick}>Submit</button>
      <AddProductModal setData={setData}></AddProductModal>

      <div className={style["tabulatorTable"]}>
        <ReactTabulator
          data={data}
          columns={columns}
          events={{ cellEdited: handleCellEdited }}
          OnRef={tableRef}
        />
      </div>
      <Footer></Footer>
    </>
  );
}

export default Dashboard;
