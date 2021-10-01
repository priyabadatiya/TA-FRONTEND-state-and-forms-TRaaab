import React from 'react';
import data from '../data.json';
import Product from './Product';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        
      ],
    };
  }

  componentDidMount() {
    this.getAllProduct();
    console.log('didMount')
  }



  getAllProduct = () => {
    this.setState({ products: data.products });
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
