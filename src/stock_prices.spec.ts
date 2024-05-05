import { maxProfit } from "./stock_prices";
const stockPrices = [10, 7, 5, 8, 11, 9];
const stockPricesWithZero = [7, 10, 0, 2, 1, 4, 1];
const stockPricesNegative = [11, 9, 7, 6, 3, 1];
const stockPricesCheckOrder = [8, 3, 4];
const stockPricesOnlyTwo = [7, 3];

describe("MaxProfit", () => {
	it("should return the max profit from a list of prices", () => {
		expect(maxProfit(stockPrices)).toEqual(6);
	});
	it("should handle zero as a potential price", () => {
		expect(maxProfit(stockPricesWithZero)).toEqual(4);
	});
	it("should return the max profit even if prices go down all day", () => {
		expect(maxProfit(stockPricesNegative)).toEqual(-1);
	});

	it("should obey the laws of reality and never buy and sell at the same time or sell before buying", () => {
		expect(maxProfit(stockPricesCheckOrder)).toEqual(1);
		expect(maxProfit(stockPricesOnlyTwo)).toEqual(-4);
		expect(() => maxProfit([2])).toThrow(
			"At least 2 prices are required to buy and sell"
		);
	});
});
