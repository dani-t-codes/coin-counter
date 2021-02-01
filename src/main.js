//Coin Counter Prompt
//const X = $$$
//input: $x.xx (a number or a decimal w/ two points)
// output: [Q#, D#, N#, P#] --> [(#*.25), (#*.10), (#*.05, (#*.1))]
// filter()
//skip UI
//required: tests, fxnl code
// e.g. input($4.99).expect([(4*4*.25), (9*.10), (1*.05), (4*.01)])
//*-------------------*

//const numArray = [7, 14, 32, 8];
//const filteredArray = numArray.filter(e => e > 10);

//recursive fxn:
//const recursiveFxn = (element) => {
  //1) if [termination condition - if s.t. goes wrong]
  //return;
  //2) if [base case - to stop calling itself]
  //return x, y, z;
  //3) else [the recursion itself]
  //[each time this conditional is reached, fxn calls itself]
//}

const coins = [ .25, .10, .05, .01]
const filteredArray = coins.filter (e => e = 4.99); //filter()

//reduce()

const coins = [ .25, .10, .05, .01];
let subNum = [];
const totalCoins = coins.reduce(function(coinTally, coins) {
  coinTally[coins] = (coinTally[coins] || 0) + 1;
  return coinTally;
  const subNum = coinTally.map(function(element){
    return element - coinTally;
  });
}, {});




// const coinsArr = [.25, .10, .05, .01];
// const dollaToCoins = coinsArr.map(function(num)){
//  return num * coinsArr[i];
//}, 1);
// const coinCounter = (num) => {
//   if (num === NaN) {
//     return;
//   } if (num ... ) {
//     //
//   } else {
//     console.log(num);
//     return coinCounter(num ...)
//   }
// }


const coinsArr = [.25, .10, .05, .01]
//const moduloArr = [4, 10, 20, 100]
let dollaToCoins = [];

function coinCounter(num) {
  const num = coinsArr[i] * num;
for (let i=0; i < moduloArr.length; i++) {
    if (num === NaN) {
      return;
    } if (num % moduloArr[i] === 0) {
    console.log(coinsArr[i]);
    dollaToCoins.push(num * moduloArr[i]);
    return num / moduloArr[i] && num % moduloArr[i];
    } else if (num % moduloArr[i] != 0) {
      return num % moduloArr[i];
    }
  }
}
// coinsArr.forEach(function(dolla) {
//   dollaToCoins.push(element * coinsArr[i])
// });

const coinsArr = [.25, .10, .05, .01]
//if num * coinsArr[i] != whole num

function amountTocoins(amount, coins) 
{
 if (amount === 0) 
  {
     return [];
   } 
 else
   {
     if (amount >= coins[0]) 
       {
        left = (amount - coins[0]);
        return [coins[0]].concat( amountTocoins(left, coins) );
        } 
      else
        {
         coins.shift();
         return amountTocoins(amount, coins);
         
        }
    }
} 
console.log(amountTocoins(46, [25, 10, 5, 2,1]));