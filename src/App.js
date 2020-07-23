import React from "react";
import "./scss/index.scss";
import productData from "./productData.json";
import Product from "./components/product";

function App() {
  return (
    <div className="app">
      <h1 className="app__headline">Grocery List</h1>
      <section className="product-grid">
        {
          // Uses productData.json to create product cards
          productData.map((product, i) => {
            return (
              <Product
                quantity={product.qty}
                name={product.item}
                brand={product.brand}
                desc={product.type}
                category={product.category}
                key={i}
              />
            );
          })
        }
      </section>
    </div>
  );
}

export default App;
