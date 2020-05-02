import React, { Component } from "react";

export class AddProduct extends Component {
  render() {
    return (
      <div className="create-product">
        <label>
          Product Name:
          <input
            type="text"
            placeholder="Product Name"
            onChange={this.props.addProductName}
          />
        </label>
        <br/>
        <label>
          Price:
          <input
            type="text"
            placeholder="Price"
            onChange={this.props.addProductPrice}
          />
        </label>
        <br/>
        <button onClick={this.props.handleClick}>Submit Product</button>
      </div>
    );
  }
}
