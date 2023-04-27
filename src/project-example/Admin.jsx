import { useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

export const Admin = () => {
  const [formData, setFormData] = useState({
    title: "",
    thumbnail: "",
    brand: "",
    category: "",
    description: "",
    stock: "",
    discountPercentage: "",
    price: "",
    rating: "",
  });

  const navigate = useNavigate();
  console.log("submitinau", formData);

  const onHandleSubmitForm = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8000/products", formData)
      .then((response) => {
        console.log(response.data);
        navigate("/products");
      })
      .catch((err) => console.log(err));
  };

  const handleOnChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <>
      <div>
        <form
          onSubmit={onHandleSubmitForm}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            color: "lightblue",
            backgroundColor: "#42a6a6",
            padding: "8px",
            margin: "50px",
            width: "800px",
            borderRadius: "8px",
          }}
        >
          <fieldset
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <legend>Add new product</legend>
            <div class="mb-3">
              <label for="disabledTextInput" class="form-label">
                Title
              </label>
              <input
                name="title"
                type="text"
                class="form-control"
                placeholder=""
                onChange={handleOnChange}
              />
            </div>
            <div style={{ width: "320px" }} class="mb-3">
              <label for="disabledTextInput" class="form-label">
                Description
              </label>
              <input
                name="description"
                type="text"
                class="form-control"
                placeholder=""
                onChange={handleOnChange}
              />
            </div>
            <div class="mb-3">
              <label for="disabledTextInput" class="form-label">
                Price
              </label>
              <input
                type="number"
                name="price"
                class="form-control"
                placeholder=""
                step={0.01}
                onChange={handleOnChange}
              />
            </div>
            <div class="mb-3">
              <label for="disabledTextInput" class="form-label">
                Discount
              </label>
              <input
                type="number"
                name="discountPercentage"
                id="disabledTextInput"
                class="form-control"
                placeholder=""
                onChange={handleOnChange}
              />
            </div>
            <div class="mb-3">
              <label for="disabledTextInput" class="form-label">
                Rating
              </label>
              <input
                name="rating"
                type="number"
                id="disabledTextInput"
                class="form-control"
                placeholder="1.00 - 5.00"
                step={0.01}
                onChange={handleOnChange}
              />
            </div>
            <div class="mb-3">
              <label for="disabledTextInput" class="form-label">
                Stock
              </label>
              <input
                name="stock"
                type="number"
                class="form-control"
                placeholder=""
                step={0}
                onChange={handleOnChange}
              />
            </div>
            <div class="mb-3">
              <label for="disabledTextInput" class="form-label">
                Brand
              </label>
              <input
                name="brand"
                type="text"
                id="disabledTextInput"
                class="form-control"
                placeholder=""
                onChange={handleOnChange}
              />
            </div>
            <div class="mb-3">
              <label for="disabledTextInput" class="form-label">
                Category
              </label>
              <input
                name="category"
                type="text"
                id="disabledTextInput"
                class="form-control"
                placeholder=""
                onChange={handleOnChange}
              />
            </div>
            <div class="mb-3">
              <label for="disabledTextInput" class="form-label">
                Image url
              </label>
              <input
                type="text"
                name="thumbnail"
                id="disabledTextInput"
                class="form-control"
                placeholder=""
                onChange={handleOnChange}
              />
            </div>
            <button type="submit" class="btn btn-primary">
              Add product
            </button>
          </fieldset>
        </form>
      </div>
    </>
  );
};
