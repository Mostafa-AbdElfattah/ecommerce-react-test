import React, { Component } from "react";

export class Product extends Component {
  render() {
    return (
      <div className="product">
        <h1>{this.props.product.name}</h1>
        <div>
          <img className="product-image" src={this.props.product.image} alt="" />
        </div>
        <b>Price: ${this.props.product.price}</b>
        <div className="btn-container">
          <button onClick={this.props.handleClick} className="btn">
            Add to Cart
          </button>
          
        </div>
      </div>
    );
  }
}
