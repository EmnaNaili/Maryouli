import React, { Component } from "react";
import { connect } from "react-redux";
import util from "../util";
import { addToCart } from "../actions/cartAction";
import { fetchProducts } from "../actions/productAction";
class Products extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }
  render() {
    const productItems = this.props.products.map((product) => (
      <div className="col-md-4" key={product.id}>
        <div className="thumbnail text-center">
          <a
            href={`#${product.id}`}
            onClick={(e) => this.props.addToCart(this.props.cartItems, product)}
          >
            <img src={`products/${product.sku}_2.jpg`} alt={product.title} />
            <p   style={{textDecoration: "none"}}>{product.title}</p>
          </a>
          <b>{util.formatCurrency(product.price)}</b>
          <button
          style={{textDecoration: "none",backgroundColor:"#df691a" , border:"none" }}
            className="btn btn-primary " 
            onClick={(e) => this.props.addToCart(this.props.cartItems, product)}

            // onClick={(e) => this.props.handleAddToCart(e, product)}
          >
            Add to cart
          </button>
        </div>
      </div>
    ));

    return <div className="row">{productItems}</div>;
  }
}
const mapStateToProps = (state) => ({
  products: state.products.filteredItems,
  cartItems: state.cart.items,
});
export default connect(mapStateToProps, { fetchProducts, addToCart })(Products);