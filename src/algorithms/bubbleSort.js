import { sleep } from "../utils/sleep";
export async function bubbleSort(arr,setArr,speed)
{
    for(let j=0;j<arr.length;j++)
    {
    for(let i=0;i<arr.length-j-1;i++)
    {
        if(arr[i]>arr[i+1])
        {
            [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
            setArr([...arr])
            await sleep(speed)
        }

    }
}
    return arr
}