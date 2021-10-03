import React from 'react';
import data from '../data.json';
import Product from './Product';
import Aside from './Aside';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allProducts: [],
      filteredProducts: [],
      sizes: [],
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
    const size = event.target.innerText;
    var sizes = this.state.sizes;
    var products = this.state.allProducts;

    if (sizes.includes(size)) {
      sizes = sizes.filter((x) => x != size);
    } else {
      sizes.push(size);
    }

    var filteredProducts = products.filter((product) =>
      product.availableSizes
        .map((el) => sizes.includes(el))
        .includes(true)
    );

    this.setState({ sizes });
    console.log(sizes,filteredProducts);
    sizes[0]
      ? this.setState({ filteredProducts })
      : this.setState({ filteredProducts: products });
  };

  render() {
    return (<>
        <h2 className="p-6"> {this.state.filteredProducts.length} {this.state.filteredProducts.length>1?"Products":"Product"} found</h2>
      <div className="flex">

        <Aside sizes={this.state.sizes} handleClick={this.handleClick} />

        <div className="flex flex-wrap w-10/12">
          {this.state.filteredProducts.map((product) => (
            <Product key={product.id} {...product} />
          ))}
        </div>
      </div>
    </>);
  }
}

export default Main;
