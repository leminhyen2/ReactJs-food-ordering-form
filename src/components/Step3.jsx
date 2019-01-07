import React, { Component } from 'react';
import infoJSON from './dishes.json';


class Step3 extends Component {

//push dish[0] into dish state and 1 into serving state in parent component so React will listen and render new row with appropriate values
  handleAddRow = () => {
  this.props.push()
};

//if there is more row than one, pop last element from dish state and serving state array so React will delete one row
  handleRemoveRow = () => {
    const {values: { dish }} = this.props;
    if (dish.length !== 1) {
      this.props.pop()
    }
  };

//based on chosen meal and restaurant from state object, get all dishes then filter out dupplicates one then return a complete list/array
  outputDishes(meal, restaurant) {
    let arr = [];
    for (let i = 0; i < infoJSON.dishes.length; i++) {
      if (infoJSON.dishes[i].availableMeals.includes(meal) && infoJSON.dishes[i].restaurant.includes(restaurant)) {
        arr.push(infoJSON.dishes[i].name)
      }
    }

    let DishesList = Array.from(new Set(arr))

    let arrayOfDishes = []
    for (let i = 0; i < DishesList.length; i++) {
      arrayOfDishes.push(<option key={i} value={DishesList[i]}>{DishesList[i]}</option>)
    }
    return arrayOfDishes; 
}

  output1to10() {
    let arr = [];
    for (let i = 1; i <= 10; i++) {
        arr.push(<option key={i} value={i}>{i}</option>)
    }
    return arr; 
}

  next = (e) => {
    const {values: { dish, serving, people }} = this.props;
    let sumOfServing = serving.reduce((a, b) => parseInt(a) + parseInt(b), 0);
    if (sumOfServing > 10) {
      alert("Total serving must be less than or equal to 10")
    }
    else if (sumOfServing < people) {
      alert("Total serving must be greater than or equal to the number of people selected in 1st step")
    }
    else if (new Set(dish).size !== dish.length) {
      alert("Please don't select the same dish twice")
    }
    //if user already fill in info for 1st row, transist to next step 
    else if (dish.length !== 0 && serving.length !== 0 && dish.length === serving.length && !dish.includes("") && !serving.includes("")) {
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
      const {values: { meal, restaurant, dish, serving, people }} = this.props;
      //show total serving
      let sumOfServing = serving.reduce((a, b) => parseInt(a) + parseInt(b), 0); 
      let rows = []       
      for (let i = 1; i < dish.length; i++) {
        rows.push({content: 
          <tr>
            <td>
              <select key={i} id={i} value={dish[i]} className="dish" onChange={this.props.handleChange('dish')}>
                <option value=""></option>
                {this.outputDishes(meal, restaurant)}
                </select></td>
            <td>
              <select key={i} id={i} value={serving[i]} className="serving" onChange={this.props.handleChange('serving')}>
                <option value=""></option>
                {this.output1to10()}
              </select>
            </td>
        </tr>
      })
    }
    //out put all rows starting from 2nd value of dish and serving array
      let rowsOutput = rows.map(row => row.content) 
    
      return (
      <div>
        <h3 className="tab">Step 3:
        <br />
        <br />
        <table id="step3Table">
          <tbody>
            <tr>
              <th>Please select a dish</th>
              <th>Please select number of servings</th> 
            </tr>
            <tr>
              <td>
                <select key={0} id={0} value={dish[0]} className="dish" onChange={this.props.handleChange('dish')}>
                  <option value=""></option>
                  {this.outputDishes(meal, restaurant)}
                </select>
              </td>
              <td>
                <select key={0} id={0} value={serving[0]} className="serving" onChange={this.props.handleChange('serving')}>
                  <option value=""></option>
                  {this.output1to10()}
                </select>
              </td>
            </tr>
            {rowsOutput}
          </tbody>
        </table>
        <p>Total Serving: {sumOfServing}</p>
        <p>Number of People: {people}</p>
        <br />
        <div style={{overflow: 'auto'}}>
          <div style={{float: 'left'}}>
            <button type="button" id="deleteBtn" onClick={this.handleRemoveRow}>Delete</button>
            <button type="button" onClick={this.handleAddRow}>Add</button>
          </div>
        </div>
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

export default Step3;