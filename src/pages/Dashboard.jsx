import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import "react-tabulator/lib/styles.css";
import { ReactTabulator } from "react-tabulator";
import { useEffect, useState } from "react";

function Dashboard() {
  const [data, setData] = useState([]);
  const [updatedRows, setUpdatedRows] = useState([]);
  const columns = [
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
      editor: "input",
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
  const handleButtonClick = async () => {
    console.log("Updated Rows:", updatedRows);
    for (const row of updatedRows) {
      await fetch(`${import.meta.env.VITE_API_URL}/products/${row.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(row),
      });
    }
    alert("actualizado...");
  };
  return (
    <>
      <NavBar></NavBar>
      <ReactTabulator
        data={data}
        columns={columns}
        events={{ cellEdited: handleCellEdited }}
      />
      <button onClick={handleButtonClick}>Submit</button>
      <Footer></Footer>
    </>
  );
}

export default Dashboard;
