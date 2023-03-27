function quickSort<T>(arr: T[]): T[] {
    if (arr.length <= 1) {
        return arr;
    }
    const pivotIndex = Math.floor(arr.length / 2);
    const pivot = arr[pivotIndex];
    const left = [];
    const right = [];
    for (let i = 0; i < arr.length; i++) {
        if (i === pivotIndex) {
            continue;
        }
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
}

// Sử dụng 
const myArr2 = [3, 6, 1, 8, 2, 10];
const sortedArr2 = quickSort(myArr2);
console.log(sortedArr2); // in ra [1, 2, 3, 6, 8, 10]
