import React from "react";
import axios from "axios";
import { ProductsList } from "./ProductsList.js";
import { AddProduct } from "./AddProduct";
import { Cart } from "./Cart";

// Renders all products to the screen
export class Home extends React.Component {
  componentDidMount() {
    this.getProducts();
  }

  state = {
    count: 0,
    products: [],
    name: "",
    price: "",
  };

  getProducts = () => {
    axios
      .get("http://localhost:4000/products")
      .then((backendResponse) =>
        this.setState({ products: backendResponse.data })
      );
  };

  postProducts = () => {
    axios.post("http://localhost:4000/products", {
      id: this.state.name,
      name: this.state.name,
      price: this.state.price,
    });

    // axios({
    //   method: 'DELETE',
    //   url: 'http://localhost:4000/products/7',

    // });

  };
  

  addProductName = (event) => {
    this.setState({ name: event.target.value });
  };

  addProductPrice = (event) => {
    this.setState({ price: event.target.value });
  };

  increaseCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <div className="home">
        <AddProduct
          addProductName={this.addProductName}
          addProductPrice={this.addProductPrice}
          handleClick={this.postProducts}
        />
        <ProductsList
          handleClick={this.increaseCount}
          products={this.state.products}
        />
        <Cart count={this.state.count} />
      </div>
    );
  }
}
