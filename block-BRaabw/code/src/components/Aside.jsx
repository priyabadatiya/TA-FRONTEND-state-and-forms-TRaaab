import React from 'react';

export default class Aside extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="p-10 w-60 h-full">
        <h2>Sizes:</h2>

        <div className="p-4 flex flex-wrap">
          {['XS', 'S', 'ML', 'M', 'L', 'XL', 'XXL'].map((size) => {
            return (
              <span
                className={`rounded-full h-10 w-10 flex items-center justify-center  border-2 m-2 ${
                  this.props.sizes.includes(size) ? 'bg-black text-white' : ''
                }`}
                onClick={(e) => this.props.handleClick(e)}
              >
                {size}
              </span>
            );
          })}
        </div>
      </div>
    );
  }
}
