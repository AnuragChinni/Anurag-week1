let arr = [55,66,78,1,10,98];
arr.map(val => +val);
let sum = 0;
for( let ind=0;ind<arr.length;ind++)
{
sum = sum + arr[ind];
}
console.log(sum);
