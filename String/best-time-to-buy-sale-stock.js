// you are given an array prices where prices[i] is the price of a given stock on the ith day
// you want to maximize your profit by choosing a single day to buy one stock
// and choose a different day in future to sale that stock.
// return the maximum profit , if you can't then return 0

// input : prices=[7,1,5,3,6,4];--------------> output:5
// input : prices=[7,6,4,3,1];--------------> output:0

// Solution: using Greedy algorithm
const profit=(prices)=>{
    let min=prices[0] || 0;
    let profit=0;

    for(let i=1;i<prices.length;i++){
        if(prices[i]<min)
            min=prices[i];
            
        if((prices[i]-min)>profit)
            profit=prices[i]-profit;            
    }
    return profit;
}

console.log(profit([7,6,4,3,1]));
