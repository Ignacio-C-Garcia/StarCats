import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import "react-tabulator/lib/styles.css";
import { ReactTabulator } from "react-tabulator";
import { useEffect, useState } from "react";

function Dashboard() {
  const [data, setData] = useState([]);
  const [updatedRows, setUpdatedRows] = useState([]);
  const [addedRows, setAddedRows] = useState([]);
  const columns = [
    {
      title: "Delete",
      field: "delete",
      formatter: "buttonCross",
      width: 75,
      hozAlign: "center",
      cellClick: (e, cell) => {
        const data = cell.getRow().getData();
        handleDeleteRow(data.id);
        setAddedRows((prev) => [...prev, data]);
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
  const handleDeleteRow = (id) => {
    setData((prev) => {
      return prev.filter((row) => row.id !== id);
    });
  };
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
    console.log("Added Rows:", updatedRows);
    for (const row of updatedRows) {
      await fetch(`${import.meta.env.VITE_API_URL}/products/${row.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(row),
      });
    }
    console.log("actualizado");
  };
  const handeAddRowClick = () => {
    setData((prev) => {
      return [...prev, { id: prev.length + 1 }];
    });
  };
  return (
    <>
      <NavBar></NavBar>
      <button onClick={handleSubmitClick}>Submit</button>
      <button onClick={handeAddRowClick}>AddRow</button>
      <ReactTabulator
        data={data}
        columns={columns}
        events={{ cellEdited: handleCellEdited }}
      />
      <Footer></Footer>
    </>
  );
}

export default Dashboard;
