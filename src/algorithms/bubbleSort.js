import { sleep } from "../utils/sleep";
export async function bubbleSort(arr, setArr, speed, setStats ,setActiveBars) {
    const startTime = performance.now();
    let comparisons = 0;
    let swaps = 0;
    let  executionTime = 0;
    const updateStats = () => {
        setStats({
            comparisons,
            swaps,
            executionTime,
        });
    };
    for (let j = 0; j < arr.length; j++) {
        for (let i = 0; i < arr.length - j - 1; i++) {
            comparisons++;
            updateStats();
            setActiveBars([i,i+1])
           await sleep(1000/2)
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                swaps++;
                updateStats();
                setArr([...arr])
                await sleep(speed)
            }
            setActiveBars([]);
            await sleep(speed / 4);

        }
    }
    const endTime = performance.now();
    executionTime=Math.floor(endTime - startTime);
    updateStats();
    console.log({
    startTime,
    endTime,
    executionTime
});
    return arr
}