// test/main.test.js
const { greet } = require('../lib/main');

test('greet function should log welcome message', () => {
  console.log = jest.fn();
  greet();
  expect(console.log).toHaveBeenCalledWith("Welcome to @neuit/guanyierp package!");
});
