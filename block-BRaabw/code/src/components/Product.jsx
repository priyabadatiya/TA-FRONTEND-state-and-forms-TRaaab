import React from 'react';
import Orderby from './Orderby'
class Product extends React.Component {
  constructor(props) {
    super(props);
  }

  customFn(x) {
    return (
      x.toString().split('.')[1] && '.' + x.toFixed(2).toString().split('.')[1]
    );
  }

  render() {
    return (
      <div className="flex flex-col text-center relative w-72 p-3 m-2 border-2 border-white hover:border-gray-200 ">
        <div className="absolute right-2">
          <span className="bg-black text-white p-2 w-5/12 text-xs  ">
            Free Shipping
          </span>
        </div>

        <img className="" src={`/static/products/${this.props.product.sku}_1.jpg`} />
        <h3 className="p-4 ">{this.props.product.title}</h3>
        <div className="flex justify-center mb-5">
          <hr className="w-2/12  border-2 border-yellow-500" />
        </div>

        <div>
          {this.props.product.currencyFormat}
          <span className="font-bold text-2xl">
            {this.props.product.price.toString().split('.')[0]}
          </span>
          {this.customFn(this.props.product.price)}
        </div>
        <span className="text-gray-400">
          or 5x<span className="font-bold text-xl">$26.98</span>
        </span>
        <button className="bg-black text-white p-4 m-1 hover:bg-yellow-400">
          Add to cart
        </button>
      </div>
    );
  }
}
export default Product;
