import React, { useState } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";

const CreateProduct = () => {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    setProduct({
      ...product,
      image: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar el envío del formulario, por ejemplo, enviando los datos a una API
    console.log(product);
  };

  return (
    <Container>
      <h1 className="mt-4">Crear Producto</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group as={Row} className="mb-3" controlId="formProductName">
          <Form.Label column sm={2}>
            Nombre del Producto
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              name="name"
              value={product.name}
              onChange={handleChange}
              required
            />
          </Col>
        </Form.Group>

        <Form.Group
          as={Row}
          className="mb-3"
          controlId="formProductDescription"
        >
          <Form.Label column sm={2}>
            Descripción
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              as="textarea"
              name="description"
              value={product.description}
              onChange={handleChange}
              required
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formProductPrice">
          <Form.Label column sm={2}>
            Precio
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="number"
              name="price"
              value={product.price}
              onChange={handleChange}
              required
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formProductCategory">
          <Form.Label column sm={2}>
            Categoría
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              name="category"
              value={product.category}
              onChange={handleChange}
              required
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formProductImage">
          <Form.Label column sm={2}>
            Imagen
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="file"
              name="image"
              onChange={handleImageChange}
              required
            />
          </Col>
        </Form.Group>

        <Button variant="primary" type="submit">
          Crear Producto
        </Button>
      </Form>
    </Container>
  );
};

export default CreateProduct;
