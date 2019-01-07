const infoJSON = require ('./dishes.json');

let arrayOfRestaurant = []

let outputRestaurant = (meal) => {
    let arr = [];
    for (let i = 0; i < infoJSON.dishes.length; i++) {
      if (infoJSON.dishes[i].availableMeals.includes(meal)) {
        arr.push(infoJSON.dishes[i].restaurant)
      }
    }

    let restaurantList = Array.from(new Set(arr))

    for (let i = 0; i < restaurantList.length; i++) {
      arrayOfRestaurant.push(restaurantList[i])
    }
    return arrayOfRestaurant; 
}

outputRestaurant("breakfast")

test('List all restaurants according to meal time', () => {
  expect(arrayOfRestaurant[0]).toBe("Mc Donalds");
  expect(arrayOfRestaurant.length).toBe(3);

})