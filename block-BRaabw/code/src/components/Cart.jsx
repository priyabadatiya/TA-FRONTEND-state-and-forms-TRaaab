import React from "react"
import CartItem from "./Cartitem"

export default class Cart extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            isOpen:false
        }
    }
close = ()=>{
    this.setState({isOpen:false})
};
open = ()=>{
    this.setState({isOpen:true})
}
    render(){
        const{isOpen} = this.state;
        if(!isOpen){
            return <Closedcart open={this.open}/>
        }
        return (
            <aside className='cart'>
        <div onClick={this.close} className='close-btn'>
          X
        </div>
        <div className='cart-body'>
          <div className='cart-heading'>
            <div className='cart-icon'>
            {}
              <span className='item-count'>4</span>
            </div>
            <h2>Cart</h2>
          </div>
          <CartItem />
          <CartItem />

          <div className='cart-checkout'>
            <div>
              <p>SUBTOTAL</p>
              <p>$ 199.00</p>
            </div>
            <button>CHECKOUT</button>
          </div>
        </div>
      </aside>
    );
  }
}
    function Closedcart(props){
        return (
            <div className='close-cart'>
                <span onClick={props.open} className='open-btn'>
                <div className='cart-icon'>
          
          <span className='item-count'>4</span>
        </div>
      </span>
    </div>
  );
}
