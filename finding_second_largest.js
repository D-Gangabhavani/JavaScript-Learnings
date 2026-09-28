//finding second largest element in an array
let data=[6,12,8,19,2,5,9]
    let n=data[0];
    let arr=data.slice(1);
    arr.sort((a,b)=>b-a);
    for (let i=1;i<n;i++)
    {
        if(arr[i]!=arr[0])
        {
            console.log(arr[i]);
            break;
        }
    } 
