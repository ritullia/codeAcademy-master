import { useEffect, useState } from "react";
import { ProductItem } from "./ProductItem";
import { Container } from "./styles/StyledProduct";
import { Modal, Button } from "react-bootstrap";
import { Toast } from "../components/Toast";

export const ProductList = () => {
  const [activeProduct, setActiveProduct] = useState(null);
  const [addedToCartProduct, setAddedToCartProduct] = useState(null);
  const [products, setProducts] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState("");

  const handleProductClick = (product) => {
    setActiveProduct(product);
  };

  const handleModalClose = () => {
    setActiveProduct(null);
  };

  const handleAddToCart = () => {
    console.log("Įdėta į krepšelį");
    setAddedToCartProduct(activeProduct);
    setActiveProduct(null);
  };

  const onhandleChange = (e) => {
    setFilter(e.target.value);
  };

  useEffect(() => {
    fetch("http://localhost:8000/products")
      .then((res) => res.json())
      .then((products) => {
        setProducts(products);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div>
        <input onBlur={onhandleChange} />
      </div>
      <Container>
        {products
          ?.filter((product) => product.title.toLowerCase().includes(filter))
          .map((product) => (
            <ProductItem
              key={product.id}
              product={product}
              onClick={handleProductClick}
            />
          ))}
      </Container>

      <Toast
        show={!!addedToCartProduct}
        onClose={() => setAddedToCartProduct(null)}
        body={`Produktas ${addedToCartProduct?.title} pridėtas į jūsų krepšelį`}
      />

      {/* <ToastContainer position="top-center">
        <Toast show={addedToCartProduct} autohide delay={3000} onClose={() => setAddedToCartProduct(null)}>
          <Toast.Header />
          <Toast.Body>
            Produktas {addedToCartProduct?.title} pridėtas į jūsų krepšelį
          </Toast.Body>
        </Toast>
      </ToastContainer> */}

      <Modal show={activeProduct} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {activeProduct?.title}
            {/* {activeProduct && activeProduct.title} */}
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {activeProduct?.description}. Stock: {activeProduct?.stock}
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAddToCart}>
            Add To Cart
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
