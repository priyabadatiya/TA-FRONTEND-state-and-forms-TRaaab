import React from 'react';
import data from '../data';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeQuestion: null
    }
  }
  render() {
    let allQuestions = data.map((Q) => Q);

    return (
      <>
        {
          allQuestions.map((data, i) => {
            return (
              <section className="mx-auto w-3/2">
                <div key={i} className="p-5">
                  <h2 className={this.state.activeQuestion === i ? "bg-green-100" : "bg-yellow-200"}>{data.Q}<i onClick={() => {
                    this.setState({
                      activeQuestion: this.state.activeQuestion === i ? null : i
                    })
                  }} className={this.state.activeQuestion === i ? "fas fa-hand-point-up" : "fas fa-hand-point-down"}></i></h2>
                  <p className={this.state.activeQuestion === i ? "visible" : "hidden"}>{data.A}</p>
                </div>
              </section>
            )
          })
        }
      </>
    )
  }
}

export default App;
