import React from 'react';


class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            counter: 0,
            steps: 5,
            max: 15
        }
    }

    handleIncrement = () => {
        let {counter, steps, max} = this.state;
        this.setState({
            counter: counter + steps > max ? counter : counter + steps
        });
    }
    
    handleDecrement = () => {
        let {counter, steps, max} = this.state;
        this.setState({
            counter: counter - steps
        })
    }
    handleReset = () => {
        this.setState({
            counter: 0
        })
    }
  }

export default App;
