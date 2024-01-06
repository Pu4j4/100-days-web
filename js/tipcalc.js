/*Steven needs a very simple tip calculator for whenever he goes to eat in a restaurant. 
In his country, it's usual to tip 15% if the bill value is between 50 and 300. 
If the value is different, the tip is 20%.*/

const bill = 330;
const tip = bill<=300 && bill>=50 ? bill * 0.15 : bill * 0.20;
console.log(`the bill is ${bill},the tip is ${tip},the total amount is ${bill+tip}`);