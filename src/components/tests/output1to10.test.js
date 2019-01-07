let arr = [];

let output1to10 = () => {
    for (let i = 1; i <= 10; i++) {
        arr.push(i)
    }
    return arr; 
}

output1to10()

test('print 1 to 10', () => {
  expect(arr.length).toBe(10);
  expect(arr[arr.length - 1]).toBe(10);
})