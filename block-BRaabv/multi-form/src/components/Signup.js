import React from 'react';

class Step1 extends React.Component {
   
    render() {
        let {email} = this.props.errors;
        if(this.props.currentStep !== 1) {
            return null;
        }
        return (
            <>
                
                <legend className="text-3xl text-blue-900 font-bold my-4">Sign Up</legend>
                <div className="flex justify-between text-gray-900">
                    <div className="flex-50 flex flex-col">
                        <label htmlFor="firstname">First Name</label>
                        <input className="form-control p-2 rounded-lg my-2 border-2 border-gray-300"id="firstname" type="text" name="firstname" value={this.props.firstname} placeholder="Enter First Name" onChange={this.props.handleChange}/>
                    </div>
                    <div className="flex-50 flex flex-col">
                        <label htmlFor="lastname">Last Name</label>
                        <input  className="form-control p-2 rounded-lg my-2 border-2 border-gray-300" id="lastname" type="text" name="lastname" value={this.props.lastname} placeholder="Enter Last Name" onChange={this.props.handleChange}/>
                    </div>
                </div>
                
                <div className="flex justify-between text-gray-900 my-3">
                    <div className="flex-50 flex flex-col">
                        <label htmlFor="date">Date of birth</label>
                        <input className="form-control p-2 rounded-lg my-2 border-2 border-gray-300" id="date" type="date" name="date" value={this.props.date} onChange={this.props.handleChange}/>
                    </div>
                    <div className="flex-50 flex flex-col">
                        <label htmlFor="email">Email Address</label>
                        <input  className={!email ? "form-control p-2 rounded-lg my-2 border-2 border-gray-300": "border-2 border-red-500 p-2 rounded-lg my-2 outline-none"} id="email" type="email" name="email" value={this.props.email} placeholder="Enter Email" onChange={this.props.handleChange}/>
                        <span className="text-red-500">{email}</span>
                    </div>
                    
                </div>
               
                <label htmlFor="address" className="block">Address</label>
                <input className="form-control p-2 rounded-lg my-2 border-2 border-gray-300 w-full" type="text" placeholder="Enter Address" id="address" name="address" value={this.props.address} onChange={this.props.handleChange}/>
            </>
        )
    }    
    
}

export default Step1;
