let printRestParameters = (...x) => {
  console.log(x)
  return x;
};

let printSpreadParameter = (x) => {
  console.log(...x);
  return [...x];
}

describe('Testing destructuring', () => {
  let list;

  beforeEach(() => {
    list = ['Siux', 'Bullpadel', 'Head'];
  });

  test(`Expect output to be an array of one element being our array`, () => {
    // As list is an array, we expect the output to be an array of one element being our list array
    const output = printRestParameters(list);
    expect(output).toHaveLength(1);
    expect(output).toContain(list);
  });

  test(`Expect output to be an array with one element being 'Siux'`, () => {
    // ...x in print function weill be array with one element
    const output = printRestParameters('Siux');
    expect(output).toHaveLength(1);
    expect(output).toContain('Siux');
  });

  test(`Expect output to be an array with three elements being ['Siux', 'Bullpadel', 'Head']`, () => {
    // ...x in printRestParameters function will be an array with all parameters
    const output = printRestParameters('Siux', 'Bullpadel', 'Head');
    expect(output).toHaveLength(3);
    expect(output).toContain('Head');
  });

  test(`Expect output to be an array with three elements being ${list}`, () => {
    // ... spread operator convert our array into a list of parameters
    const output = printRestParameters(...list);
    expect(output).toHaveLength(3);
    expect(output).toContain('Head');
  });

  test(`Expect output to be an array with four elements being ['S','i','u','x']`, () => {
    // ... spread operator convert our array into a list of parameters
    const output = printSpreadParameter(...list);
    expect(output).toHaveLength(4);
    expect(output.findIndex(item => item === 'x')).toEqual(3);
  });

  test(`Expect output to be an array with three elements being ${list}`, () => {
    const output = printSpreadParameter(list);
    expect(output).toHaveLength(3);
    expect(output.findIndex(item => item === 'Head')).toEqual(2);
  });
});