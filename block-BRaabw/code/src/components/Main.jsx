import React from 'react';
import data from '../data.json';
import Product from './Product';
import Aside from './Aside';
import Orderby from './Orderby';
// import Cart from './Cart';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allProducts: [],
      filteredProducts: [],
      sizes: [],
      order: '',
    };
  }

  componentDidMount() {
    this.getAllProduct();
  }

  getAllProduct = () => {
    this.setState({
      allProducts: data.products,
      filteredProducts: data.products,
    });
  };

  handleClick = (event) => {
    this.setState({ order: '' });
    const size = event.target.innerText;
    var sizes = this.state.sizes;
    var products = this.state.allProducts;

    if (sizes.includes(size)) {
      sizes = sizes.filter((x) => x != size);
    } else {
      sizes.push(size);
    }

    var filteredProducts = products.filter((product) =>
      product.availableSizes.map((el) => sizes.includes(el)).includes(true)
    );

    this.setState({ sizes });
    console.log(sizes, filteredProducts);
    sizes[0]
      ? this.setState({ filteredProducts })
      : this.setState({ filteredProducts: products });
  };

  handleOrderBy = (event) => {
    var order = event.target.value;
    this.setState({ order: order });
    const sortedProducts = this.handleOrderProducts(
      order,
      this.state.filteredProducts
    );
    console.log(sortedProducts);
    this.setState({ filteredProducts: sortedProducts });
  };

  handleOrderProducts = (order, products) => {
    let sortedProducts = [...products];
    if (order === 'highest') {
      sortedProducts = sortedProducts.sort((a, b) => b.price - a.price);
    }
    if (order === 'lowest') {
      sortedProducts = sortedProducts.sort((a, b) => a.price - b.price);
    }
    return sortedProducts;
  };

  render() {
    return (
      <>
        <h2 className="p-6">
          {' '}
          {this.state.filteredProducts.length}{' '}
          {this.state.filteredProducts.length > 1 ? 'Products' : 'Product'}{' '}
          found
        </h2>
        <Orderby handleOrderBy={this.handleOrderBy} order={this.state.order} />
        <div className="flex">
          <Aside sizes={this.state.sizes} handleClick={this.handleClick} />

          <div className="flex flex-wrap w-10/12">
            {this.state.filteredProducts.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default Main;
