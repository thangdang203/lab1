function bubbleSort(arr) {
    var len = arr.length;
    for (var i = 0; i < len - 1; i++) {
        for (var j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
// Sử dụng
var myArr1 = [3, 6, 1, 8, 2, 10];
var sortedArr1 = bubbleSort(myArr1);
console.log(sortedArr1); // in ra [1, 2, 3, 6, 8, 10]
