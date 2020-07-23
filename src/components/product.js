import React from "react";

class Product extends React.Component {
  render() {
    return (
      <div className="product">
        <p className="product__quantity">Qty: {this.props.quantity}</p>
        <h2 className="product__name">{this.props.name}</h2>
        <p className="product__description">
          {this.props.brand} {this.props.desc}
        </p>
        <p className="product__category">{this.props.category}</p>
      </div>
    );
  }
}

export default Product;
