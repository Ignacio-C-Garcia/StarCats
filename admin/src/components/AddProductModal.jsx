import { useState } from "react";
import { useSelector } from "react-redux";

export default function AddProductModal({ setData }) {
  const auth = useSelector((state) => state.auth);
  const [error, setError] = useState(false);
  const [formValues, setFormValues] = useState({
    pic: "",
    name: "",
    categoryId: undefined,
    price: 0,
    stock: 0,
    featured: false,
    description: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    console.log("estos son los inputs", formValues);
    const response = await fetch(import.meta.env.VITE_API_URL + "/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: auth.token,
      },
      body: JSON.stringify(formValues),
    });
    if (!response.ok) {
      setError(true);
    }
    if (!response.ok) return setError(true);
    const data = await response.json();
    console.log("producto creado", data);
    setData((prev) => [...prev, data.product]);
  };
  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Agregar nuevo Producto
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="container ">
                <div className="row justify-content-center">
                  <div className="col-md-12">
                    <div className="card">
                      <div className="card-header text-center">
                        <h2>Formulario de Producto</h2>
                      </div>
                      <div className="card-body">
                        <form id="addProductForm" onSubmit={handleOnSubmit}>
                          <div className="form-group">
                            <label htmlFor="pic">Pic</label>
                            <input
                              type="text"
                              className="form-control"
                              id="pic"
                              name="pic"
                              value={formValues.pic}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                              type="text"
                              className="form-control"
                              id="name"
                              name="name"
                              value={formValues.name}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="category">Category</label>
                            <input
                              type="text"
                              className="form-control"
                              id="category"
                              name="categoryId"
                              value={formValues.categoryId}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="price">Price</label>
                            <input
                              type="text"
                              className="form-control"
                              id="price"
                              name="price"
                              value={formValues.price}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="stock">Stock</label>
                            <input
                              type="text"
                              className="form-control"
                              id="stock"
                              name="stock"
                              value={formValues.stock}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <input
                              type="text"
                              className="form-control"
                              id="description"
                              name="description"
                              value={formValues.description}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="submit"
                form="addProductForm"
                className="btn btn-primary"
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
