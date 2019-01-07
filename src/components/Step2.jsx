import React, { Component } from 'react';
import infoJSON from './dishes.json';


class Step2 extends Component {

//based on chosen meal from state object, get all restaurants then filter out dupplicates one then return a complete list/array
  outputRestaurant(meal) {
    let arr = [];
    for (let i = 0; i < infoJSON.dishes.length; i++) {
      if (infoJSON.dishes[i].availableMeals.includes(meal)) {
        arr.push(infoJSON.dishes[i].restaurant)
      }
    }

    let restaurantList = Array.from(new Set(arr))

    let arrayOfRestaurant = []
    for (let i = 0; i < restaurantList.length; i++) {
      arrayOfRestaurant.push(<option key={i} value={restaurantList[i]}>{restaurantList[i]}</option>)
    }
    return arrayOfRestaurant; 
}

//if restaurant state is not empty or ,in other word, criteria is filled in then transit to next step
  next = (e) => {
    const {values: { restaurant }} = this.props;
    if (restaurant !== "") {
      e.preventDefault()
      this.props.nextStep()
    }
    else {
      alert("Please select an option in each criteria")
    }
}

  back  = (e) => {
    e.preventDefault();
    this.props.prevStep();
}

    render() {
      const {values: { meal, restaurant }} = this.props;
      //console.log(restaurant)
      return (
    <div>
      <h3 className="tab">Step 2:
        <p>Please select a restaurant</p>
        <select value={restaurant} id="restaurant" onChange={this.props.handleChange('restaurant')}>
          <option value=""></option>
          {this.outputRestaurant(meal)}
        </select>  
      </h3> 
      <div style={{overflow: 'auto'}}>
          <div style={{float: 'right'}}>
            <button type="button" id="prevBtn" onClick={this.back}>Back</button>  
            <button type="button" id="nextBtn" onClick={this.next}>Next</button> 
          </div>
      </div>
    </div>
      )
    }
  }

export default Step2;