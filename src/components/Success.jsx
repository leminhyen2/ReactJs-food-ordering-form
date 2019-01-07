import React, { Component } from 'react';


class Success extends Component {

//if click Order, reset everything
  next = (e) => {
      e.preventDefault()
      this.props.resetEverything()
}

    render() {
      return (
        <div id ="thankyou">
            <h1>Thank you for using our service</h1>
            <h1>Would you like to order again?</h1>
            <button type="button" id="order" onClick={this.next}>Order</button> 
            <h1>Note: the objects of data is logged in the console</h1>
        </div>
      )
    }
  }

export default Success;