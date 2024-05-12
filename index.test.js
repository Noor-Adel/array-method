const processAges = require('./index.js');

test('processAges function works as expected', () => {
  const ages = [25, 18, 12, 16, 40];
  const expectedDoubledAges = [50, 36, 24, 32, 80];
  const expectedAdults = [25, 18, 40];
  const expectedAgeStrings = ['25', '18', '12', '16', '40'];

  const result = processAges(ages);

  expect(result.doubledAges).toEqual(expectedDoubledAges);
  expect(result.adults).toEqual(expectedAdults);
  expect(result.ageStrings).toEqual(expectedAgeStrings);
});
