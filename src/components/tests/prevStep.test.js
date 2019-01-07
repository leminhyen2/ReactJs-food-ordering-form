let state = {
    step: 2,
}
  
let prevStep = () => {
    state.step = state.step - 1;
}

prevStep()
  
test('step - 1 to equal 1', () => {
    expect(state.step).toBe(1);
  })