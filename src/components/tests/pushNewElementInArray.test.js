let state = {
    dish: ["Pizza", "Sushi"],
    serving: [1, 2],
}

const newDishArray = [...state.dish, state.dish[0]]
const newServingArray = [...state.serving, 1]

test('recursively push new element in array', () => {
  expect(newDishArray[2]).toBe("Pizza");
  expect(newServingArray[2]).toBe(1);
})