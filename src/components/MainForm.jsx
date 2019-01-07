import React, { Component } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Review from './Review';
import Success from './Success';


class MainForm extends Component {
  state = {
    step: 1,
    meal: '',
    people: '',
    restaurant: '',
    dish: [],
    serving: [],
  }

  nextStep = () => {
    const { step } = this.state
    this.setState({
        step : step + 1
    })
  }

  prevStep = () => {
    const { step } = this.state
    this.setState({
        step : step - 1
    })
  }

  resetEverything = () => {
    this.setState({
      step: 1,
      meal: '',
      people: '',
      restaurant: '',
      dish: [],
      serving: [],
    })
  }

  handleChange = input => event => {
    this.setState({ [input] : event.target.value })
    this.setState({dish: []})
    this.setState({serving: []})
  }

  popLastElementInArray = () => {
    this.setState({dish: this.state.dish.slice(0, -1)})
    this.setState({serving: this.state.serving.slice(0, -1)})
  }

  pushNewElementInArray = () => {
    let newDishState = this.state.dish
    let newServingState = this.state.serving

    this.setState({dish: [...newDishState, this.state.dish[0]]})
    this.setState({serving: [...newServingState, 1]})
  }

  //change value in array according to id in HTML select. Activate when users make changes in row to make sure correct row value go to correct element in array
  handleChangeForDishAndServing = input => event => {
    if (input === "dish") {
      let stateArray = this.state.dish
      stateArray[event.target.id] = event.target.value
      this.setState({dish: stateArray})
    }
    else if (input === "serving") {
      let stateArray = this.state.serving
      stateArray[event.target.id] = event.target.value
      this.setState({serving: stateArray})
    }
  }

  render() {
        const {step} = this.state;
        const { meal, people, restaurant, dish, serving } = this.state;
        const values = { meal, people, restaurant, dish, serving };
        switch(step) {
        case 1:
            return <Step1 
            nextStep={this.nextStep} 
            prevStep={this.prevStep} 
            handleChange = {this.handleChange}
            values={values}
            />

        case 2:
            return <Step2             
            nextStep={this.nextStep} 
            prevStep={this.prevStep} 
            handleChange = {this.handleChange}
            values={values}
            />

        case 3:
            return <Step3             
            nextStep={this.nextStep}
            prevStep={this.prevStep}  
            handleChange = {this.handleChangeForDishAndServing}
            pop = {this.popLastElementInArray}
            push = {this.pushNewElementInArray}
            values={values}
            />

        case 4:
            return <Review 
            nextStep={this.nextStep}
            prevStep={this.prevStep} 
            values={values}
            />

        case 5:
            return <Success 
            resetEverything = {this.resetEverything}
            />
      }
    }
  }

export default MainForm;