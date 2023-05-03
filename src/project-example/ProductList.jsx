import { useContext, useEffect, useMemo, useState } from "react";
import { ProductItem } from "./ProductItem";
import { Container, FilterDiv, FilterInput } from "./styles/StyledProduct";
import { Modal, Button } from "react-bootstrap";
import { Toast } from "../components/Toast";
import { StoreContext } from "./reducerForBasket/StoreContext";

export const ProductList = () => {
  const [activeProduct, setActiveProduct] = useState(null);
  const [addedToCartProduct, setAddedToCartProduct] = useState(null);
  const [products, setProducts] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState("");
  const { addToBasket } = useContext(StoreContext);

  const handleProductClick = (product) => {
    setActiveProduct(product);
  };

  const handleModalClose = () => {
    setActiveProduct(null);
  };

  const handleAddToCart = () => {
    console.log("Įdėta į krepšelį");
    setAddedToCartProduct(activeProduct);
    addToBasket(activeProduct);
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

  const mappedProducts = useMemo(() => {
    return products
      ?.filter((product) => product.title.toLowerCase().includes(filter))
      .map((product) => (
        <ProductItem
          key={product.id}
          product={product}
          onClick={handleProductClick}
        />
      ));
  }, [products, filter]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <FilterDiv>
        <label>Filter</label>
        <FilterInput onBlur={onhandleChange} />
      </FilterDiv>
      <Container>{mappedProducts}</Container>

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
