import React from 'react';
export default class Orderby extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className="pb-8  ">
      <select className="float-right mr-96" value={this.props.order} onChange={this.props.handleOrderBy}>
        <option value="">Select</option>
        <option value="lowest">Lowest to highest</option>
        <option value="highest">Highest to lowest</option>
      </select>
   </div>
  }
}
