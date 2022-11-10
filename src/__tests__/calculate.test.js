import calculate from '../logic/calculate';

test('If function receives button AC ', () => {
  //arrange
  const inputObject = {
    total: 3,
    next: 5,
    operation: null,
  };

  const button = 'AC';

  const expectedValue = {
    total: null,
    next: null,
    operation: null,
  };

  //act
  const actualValue = calculate(inputObject, button);
  //assertions
  expect(actualValue).toEqual(expectedValue);
});
