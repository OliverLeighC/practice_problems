/**
 * Write an efficient method that takes stockPrices and
 * returns the best profit I could have made from
 * one purchase and one sale of one share of stock yesterday.
 * Must be O(n) complexity and O(1) space
 * @param prices array of integers (can include zeros)
 * @returns max profit (could be negative)
 */

/* THOUGHT PROCESS NOTES 

- if prices go down we want the smallest difference
- if prices go up we want the biggest difference 

- the buy can't be the last number and the sell can't be the first number
so sell will be index 0...length-2 and buy will be index 1...length-1

- we need to keep track of the smallest price and the biggest profit

*/

export function maxProfit(prices) {
	// set initial buy to the first price
	let minPrice = prices[0];
	// set initial profit to first possible profit
	let maxProfit = prices[1] - prices[0];

	if (prices.length < 2)
		throw new Error("At least 2 prices are required to buy and sell");

	for (let i = 1; i <= prices.length; i++) {
		const sellPrice = prices[i];
		const potentialProfit = sellPrice - minPrice;

		if (potentialProfit > maxProfit) {
			maxProfit = potentialProfit;
		}
		if (sellPrice < minPrice) {
			minPrice = sellPrice;
		}
	}

	return maxProfit;
}
