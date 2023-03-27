function selectionSort(arr) {
    var _a;
    var len = arr.length;
    for (var i = 0; i < len - 1; i++) {
        var minIndex = i;
        for (var j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if (i !== minIndex) {
            _a = [arr[minIndex], arr[i]], arr[i] = _a[0], arr[minIndex] = _a[1];
        }
    }
    return arr;
}
// Sử dụng
var myArr3 = [3, 6, 1, 8, 2, 10];
var sortedArr3 = selectionSort(myArr3);
console.log(sortedArr3); // in ra [1, 2, 3, 6, 8, 10]
