import React from 'react';

class FormValidation extends React.Component {
    constructor(props) {
        super();
        this.state = {
            username: "",
            email: "",
            passWord: "",
            confirmPassWord: "",
            errors: {
                username: "",
                email: "",
                passWord: "",
                confirmPassWord: ""
            }
        }
    }

    validateEmail = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    handleInput = ({ target }) => {
        let { name, value } = target;
        let errors = this.state.errors;
        switch (name) {
            case "username":
                errors.username = value.length < 4 ? "Username must be atleast 4 characters" : "";
                break;
            case "email":
                errors.email = this.validateEmail(value) ? "" : "Email is invalid";
                break;
            case "passWord":
                errors.passWord = value.length < 7 ? "Password must be atleast 7 characters" : "";
                break;
            case "confirmPassWord":
                errors.confirmPassWord = !value ? "confirmpassWord is required" : value === this.state.passWord ? "" : "Password is incorrect";
                break;
            default:
                break;
        }

        this.setState({ errors, [name]: value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
    };

    render() {
        let { username, email, passWord, confirmPassWord } = this.state.errors;
        return (
            <div className="w-1/3 mx-auto shadow-custom my-24 p-8">
                <form onSubmit={this.handleSubmit}>
                    <legend className="text-3xl font-bold text-center my-3">Register With Us</legend>
                    <label htmlFor="username" className="block text-custom text-xl">Username</label>

                    <input type="text"
                        id="username"
                        value={this.state.username}
                        onChange={this.handleInput}
                        name="username"
                        className={username ? "border-2 border-red-500 p-2 outline-none w-full rounded-md my-3" : "border-2 border-gray-400 bg-gray-200 outline-none w-full p-2 rounded-md my-3"} />
                    <span className="block text-black-500 mb-2">{username}</span>
                    <label htmlFor="email" className="block text-custom text-xl">Email</label>

                    <input type="email"
                        id="email"
                        value={this.state.email}
                        onChange={this.handleInput}
                        name="email"
                        className={email ? "border-2 border-red-500 p-2 outline-none w-full rounded-md my-3" : "border-2 border-gray-400 bg-gray-200 outline-none w-full p-2 rounded-md my-3"} />
                    <span className="block text-red-500 mb-2">{email}</span>

                    <label htmlFor="password-first"
                        className="block text-custom text-xl">Password</label>

                    <input type="password"
                        id="password-first"
                        value={this.state.passWord}
                        onChange={this.handleInput}
                        name="passWord"
                        className={passWord ? "border-2 border-red-500 p-2 outline-none w-full rounded-md my-3" : "border-2 border-gray-400 bg-gray-200 outline-none w-full p-2 rounded-md my-3"} />
                    <span className="block text-red-500 mb-2">{passWord}</span>

                    <label htmlFor="cm-passWord"
                        className="block text-custom text-xl">Confirm Password</label>

                    <input type="password"
                        id="cm-passWord"
                        value={this.state.confirmPassWord}
                        onChange={this.handleInput}
                        name="confirmPassWord"
                        className={email ? "border-2 border-red-500 p-2 outline-none w-full rounded-md my-3" : "border-2 border-gray-400 bg-gray-200 outline-none w-full p-2 rounded-md my-3"} />
                    <span className="block text-red-500 mb-2">{confirmPassWord}</span>
                    <input type="submit" value="submit" className="p-2 bg-blue-400 hover:bg-green-400 text-white font-bold w-full my-3 rounded-md text-xl uppercase" />

                </form>
            </div>
        )
    }
}

export default FormValidation;
