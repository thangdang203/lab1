function selectionSort<T>(arr: T[]): T[] {
    const len = arr.length;
    for (let i = 0; i < len - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if (i !== minIndex) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }
    return arr;
}

// Sử dụng
const myArr3 = [3, 6, 1, 8, 2, 10];
const sortedArr3 = selectionSort(myArr3);
console.log(sortedArr3); // in ra [1, 2, 3, 6, 8, 10]
