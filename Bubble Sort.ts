function bubbleSort<T>(arr: T[]): T[] {
    const len = arr.length;
    for (let i = 0; i < len - 1; i++) {
        for (let j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

// Sử dụng
const myArr1 = [3, 6, 1, 8, 2, 10];
const sortedArr1 = bubbleSort(myArr1);
console.log(sortedArr1); // in ra [1, 2, 3, 6, 8, 10]
