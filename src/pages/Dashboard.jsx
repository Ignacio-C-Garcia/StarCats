import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import "react-tabulator/lib/styles.css";
import { ReactTabulator } from "react-tabulator";

function Dashboard() {
  const columns = [
    { title: "Nombre", field: "name", width: 300, editor: "input" },
    {
      title: "Category",
      field: "category",
      width: 150,
      editor: "input",
    },
    {
      title: "Price",
      field: "price",
      sorter: "number",
      formatter: "input",
      width: 100,
      editor: true,
    },
    {
      title: "Stock",
      field: "stock",
      editor: "input",
    },
    {
      title: "Pic",
      field: "pic",
      formatter: "input",
      width: 100,
      editor: true,
    },
    {
      title: "Description",
      field: "description",
      width: 300,
      editor: true,
    },
    {
      title: "Id",
      field: "id",
      editor: false,
      width: 20,
    },
  ];
  var data = [
    { id: 1, name: "Oli Bob", age: "12", col: "red", dob: "" },
    { id: 2, name: "Mary May", age: "1", col: "blue", dob: "14/05/1982" },
    {
      id: 3,
      name: "Christine Lobowski",
      age: "42",
      col: "green",
      dob: "22/05/1982",
    },
    {
      id: 4,
      name: "Brendon Philips",
      age: "125",
      col: "orange",
      dob: "01/08/1980",
    },
    {
      id: 5,
      name: "Margret Marmajuke",
      age: "16",
      col: "yellow",
      dob: "31/01/1999",
    },
  ];
  return (
    <>
      <NavBar></NavBar>
      <ReactTabulator data={data} columns={columns} />
      <Footer></Footer>
    </>
  );
}

export default Dashboard;
