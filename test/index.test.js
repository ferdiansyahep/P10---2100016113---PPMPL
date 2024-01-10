// ! Dont change this code
const {
  fetchProductsData,
  setProductsCards,
  convertToRupiah,
  countDiscount,
} = require("../src/index.js");
const cartData = require("../src/data/cart.js");

// @ Write your code here


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