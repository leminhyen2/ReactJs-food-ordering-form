import React, { Component } from 'react';


class Step1 extends Component {

// display options from 1 to 10
  output1to10() {
    var arr = [];
    for (let i = 1; i <= 10; i++) {
        arr.push(<option key={i} value={i}>{i}</option>)
    }
    return arr; 
}

// if all blanks are filled in, transist to next step
  next = (e) => {
    const {values: { meal, people }} = this.props;
    if (meal !== "" && people !== "") {
      e.preventDefault()
      this.props.nextStep()
    }
    else {
      alert("Please select an option in each criteria")
    }
}

    render() {
      const {values: { meal, people }} = this.props;
      //console.log(meal)
      //console.log(people)
      return (
        <div>
          <h3 className="tab">Step 1:
            <p>Please select a meal time</p>
              <select value={meal} id="meal" onChange={this.props.handleChange('meal')}>
                <option></option>
                <option value="breakfast">Breakfast</option>
                <option value="lunch">Lunch</option>
                <option value="dinner">Dinner</option>
              </select>
              <p>Please enter number of people</p>
              <select value={people} id="people" onChange={this.props.handleChange('people')}>
                <option></option>
                {this.output1to10()}
              </select>
          </h3>  
          <div style={{overflow: 'auto'}}>
            <div style={{float: 'right'}}>
            <button type="button" id="nextBtn" onClick={this.next}>Next</button> 
            </div>
          </div>
        </div> 
     )
    }
  }

export default Step1;

