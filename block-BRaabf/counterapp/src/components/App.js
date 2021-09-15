import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            step: 5,
            max: 15
        }
    }

    handleIncrement = () => {
        let {step, max, count}= this.state;
        this.setState({
            count: count+ step >max ? count :count+ step
        });
    }

    handleDecrement = () => {
        this.setState({
            count: this.state.count - this.state.step
        })
    }
    handleReset = () => {
        this.setState({
            count: 0
        })
    }
    handleClick = (val)=>{
        this.setState({ step: val })
    }
    render() {
        return (
            <div className="container">
                <h1>{this.state.count}</h1>
                <div className="steps">
                    <h2>Steps</h2>
                    {[5, 10, 15].map((step) => (<button onClick={()=>this.handleClick(step)} className={this.state.step === step ? 'active--step' : ''}>{step}</button>))}</div>

                <div className="steps">
                    <h2>Max Value</h2>
                    {[5, 100, 200].map((max) => (<button onClick={
                        () => { this.setState({ max: max }) }
                    } className={this.state.max === max ? 'active--step' : ''}>{max}</button>))}</div>

                <div className="buttons">
                    <button onClick={this.handleIncrement}>Increment</button>
                    <button onClick={this.handleDecrement}>Decrement</button>
                    <button onClick={this.handleReset}>Reset</button>
                </div>
            </div>

        )
    }
}

export default App;
