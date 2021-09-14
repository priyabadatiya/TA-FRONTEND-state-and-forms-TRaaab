import React from "react";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 'basketball',
    };
  }
  render() {
    let labels = ['basketball', 'pubg', 'tiger', 'phone', 'laptop', 'cricket']
    return <>
      <div className='buttons'>
        {
          labels.map((label) => (<button  className={this.state.active === label ? 'active' : ''} onClick={() => { this.setState({ active: label }) }}>{label}</button>))
        }
      </div>
      <img alt={this.state.active} src={`../images/${this.state.active}.jpg`} />
    </>
  }
}

export default App;