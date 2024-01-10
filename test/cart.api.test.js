const { fetchCartsData } = require('../src/dataService');
const cartData = require("../src/data/cart.js");

jest.mock('../src/dataService', () => ({
  fetchCartsData: jest.fn(),
}));

describe('Cart API Testing', () => {
  beforeEach(() => {
    fetchCartsData.mockResolvedValue(cartData);
  });

  test('should compare the length of fetched carts data with total', async () => {
    const fetchedData = await fetchCartsData();
    expect(fetchedData.length).toBe(cartData.length);
  });
});

test('Verify arithmetic addition', () => {
  // Arrange
  const number1 = 4;
  const number2 = 4;
  const expectedSum = 8;

  // Act
  const actualSum = number1 + number2;

  // Assert
  expect(actualSum).toBe(expectedSum);
});