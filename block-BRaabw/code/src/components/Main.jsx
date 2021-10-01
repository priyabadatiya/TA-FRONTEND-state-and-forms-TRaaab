import React from 'react';
import data from '../data.json';
import Product from './Product';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          availableSizes: ['S', 'XS'],
          currencyFormat: '$',
          currencyId: 'USD',
          description: '4 MSL',
          id: 12,
          installments: 9,
          isFreeShipping: true,
          price: 10.9,
          sku: 12064273040195392,
          style: 'Black with custom print',
          title: 'Cat Tee Black T-Shirt',
        },
      ],
      isFetch: false,
    };
  }

  componentDidMount() {
    this.getAllProduct();
    console.log('didMount')
  }

  componentDidUpdate() {
    this.getFilteredProduct();
    console.log('didUpdate')

  }

  getAllProduct = () => {
    this.setState({ products: data.products });
    this.setState({ isFetch: true });
  };

  getFilteredProduct = () => {
    if (!this.state.isFetch) {
      this.setState({ products: [data.products[0]] });
      this.setState({ isFetch: true });
    }
  };

  render() {
    console.log(data);
    return (
      <div
        className="flex flex-wrap"
      >
        {this.state.products.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </div>
    );
  }
}
export default Main;
