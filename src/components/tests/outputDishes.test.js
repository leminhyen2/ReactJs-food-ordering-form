const infoJSON = require ('./dishes.json');

let arrayOfDishes = []

let outputDishes = (meal, restaurant) => {
    let arr = [];
    for (let i = 0; i < infoJSON.dishes.length; i++) {
      if (infoJSON.dishes[i].availableMeals.includes(meal) && infoJSON.dishes[i].restaurant.includes(restaurant)) {
        arr.push(infoJSON.dishes[i].name)
      }
    }

    let DishesList = Array.from(new Set(arr))
    console.log(DishesList)

    for (let i = 0; i < DishesList.length; i++) {
      arrayOfDishes.push(DishesList[i])
    }
    return arrayOfDishes; 
}

outputDishes("breakfast", "Mc Donalds")

test('List all restaurants according to meal time', () => {
  expect(arrayOfDishes[0]).toBe("Egg Muffin");
  expect(arrayOfDishes.length).toBe(1);

})