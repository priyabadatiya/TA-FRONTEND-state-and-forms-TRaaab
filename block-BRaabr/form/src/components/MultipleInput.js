import React from 'react';

class MultipleInput extends React.Component {
    constructor(props) {
        super();
        this.file = React.createRef();
        this.state = {
            text: "",
            date: "",
            textarea: "",
            textRead: "",
            textDisabled: "",
        }
    }

    handleInput = ({ target }) => {
        let { name, value } = target;
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();

    }
    render() {

        return (
            <section className=" my-12 p-8 w-1/3 flex flex-col items-center mx-auto bg-gray-300 rounded-lg">
                <form onSubmit={this.handleSubmit} className="w-11/12">
                    <legend className="text-center font-bold text-3xl mb-6">Multiple Inputs</legend>

                    <label className="text-xl font-bold block" htmlFor="text">Text Input</label>
                    <input className="w-11/12 block p-2 rounded-sm my-3" type="text" name="text" id="text" placeholder="Enter text" onChange={this.handleInput} value={this.state.text} />

                    <label className="text-xl font-bold block" htmlFor="date">Date Input</label>
                    <input className="w-11/12 block p-2 rounded-sm my-3" type="date" name="date" id="date" onChange={this.handleInput} value={this.state.date} />

                    <label className="text-xl font-bold block" htmlFor="file">File Input</label>
                    <input className="w-11/12 block p-2 rounded-sm my-3 bg-white" type="file" id="file" ref={this.file} />


                    <label className="text-xl font-bold block" htmlFor="text-readonly">ReadOnly-Input</label>
                    <input className="w-11/12 block p-2 rounded-sm my-3" type="text" readOnly name="textRead" id="text-readonly" placeholder="This can only be copied" value={this.state.textRead} />

                    <label className="text-xl font-bold block" htmlFor="text-disabled">Disabled Input</label>
                    <input className="w-11/12 block p-2 rounded-sm my-3" type="text" name="textDisabled" id="text-disabled" disabled value={this.state.textDisabled} />

                    <label className="text-xl font-bold block" htmlFor="textarea">Textarea</label>
                    <textarea className="w-11/12 mt-3" rows="5" id="textarea" onChange={this.handleInput} name="textarea" value={this.state.textarea}></textarea>

                    <label className="text-xl font-bold block" htmlFor="textarea-diabled">Textarea Disabled</label>
                    <textarea className="w-11/12 mt-3" disabled rows="5" name="textDisabled" value={this.state.textDisabled}></textarea>

                    <input className="w-11/12 block p-2 cursor-pointer my-3 bg-green-500 rounded-md text-white font-bold" type="submit" value="Submit" />
                </form>
            </section>
        )
    }
}
export default MultipleInput;