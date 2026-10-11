//Move All Negative Numbers to the Beginning of an Array
function moveNegatives(arr)
{
    let negative = [];
    let positive = [];
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]<0)
        {
            negative.push(arr[i]);
        }
        else
        {
            positive.push(arr[i]);
        }
    }
  return[...negative, ...positive];
}
let arr=[1,-2,3,-9,6,-30,20];
console.log(moveNegatives(arr).join(" "));
