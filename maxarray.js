let arr = [55,66,78,1,10,98];
arr.map(val => +val);
let max = arr[0];
for( let ind=1;ind<arr.length;ind++)
{
if(arr[ind]>max)
max = arr[ind]
}
console.log(max);
