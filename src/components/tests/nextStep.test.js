let state = {
    step: 1,
}

let nextStep = () => {
    state.step = state.step + 1;
}

nextStep()

test('adds step + 1 to equal 2', () => {
  expect(state.step).toBe(2);
})