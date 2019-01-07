let state = {
    dish: ["Pizza", "Sushi"],
    serving: [1, 2],
}

const newDishArray = state.dish.slice(0, -1)
const newServingArray = state.serving.slice(0, -1)

test('remove last element in array', () => {
  expect(newDishArray.length).toBe(1);
  expect(newServingArray.length).toBe(1);
})