import currencyConversion from "../utility.js";
describe.only("utility test", () => {
  test("renders learn react link", () => {
    expect(currencyConversion(0.0116, true)).toEqual(`$0.0116`);
  });
  test("renders learn react link", () => {
    expect(currencyConversion(0.0116, false)).toEqual(`₹0.7733`);
  });
});
