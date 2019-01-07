let state = {
    step: 3,
}
      
let resetStep = () => {
    state.step = 1
}

resetStep()

test('reset step to equal 1', () => {
    expect(state.step).toBe(1);
  })
