import React, { Component } from 'react';


class Review extends Component {
//display dish and serving together
  outputDishAndServing(dish, serving) {
    let arr = [];
    for (let i = 0; i < dish.length; i++) {
        arr.push(<li key={i} value={i}>{dish[i]} - {serving[i]}</li>)
      }
    return arr; 
}

  next = (e) => {
    console.log(this.props.values)
    e.preventDefault()
    this.props.nextStep()
}

  back  = (e) => {
    e.preventDefault();
    this.props.prevStep();
}

    render() {
      const {values: { meal, people, restaurant, dish, serving }} = this.props;

      return (
        <div>
        <h3 className="tab">Review:
        <br />
        <br />
        <table id="reviewTable">
          <tbody><tr>
              <th>Meal</th>
              <th>Number of People</th> 
              <th>Restaurant</th>
              <th>Dishes</th> 
            </tr>
            <tr><td>
                <p id="mealOutput">{meal}</p>
              </td>
              <td>
                <p id="peopleOutput" style={{textAlign: 'center'}}>{people}</p>
              </td>
              <td>
                <p id="restaurantOutput">{restaurant}</p>
              </td>
              <td>
                <ul id="dishOutput">
                  {this.outputDishAndServing(dish, serving)}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
        <p id="mealOutput" />
        <p id="peopleOutput" />
        <p id="restaurantOutput" />
        <p id="dishOutput" />
        <p id="output" />
      </h3>
        <div style={{overflow: 'auto'}}>
          <div style={{float: 'right'}}>
            <button type="button" id="prevBtn" onClick={this.back}>Back</button> 
            <button type="button" id="nextBtn" onClick={this.next}>Submit</button> 
          </div>
        </div>
      </div> 
     )
    }
  }

export default Review;