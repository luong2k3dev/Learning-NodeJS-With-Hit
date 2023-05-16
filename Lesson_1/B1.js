/*
    Xóa phần tử trùng trong mảng và sắp xếp lại theo chiều giảm dần
        let arrA = [1, 7, 4, 2, 3, 1, 2, 2, 9, 3];
    Output: [ 9, 7, 4, 3, 2, 1 ]
*/

// Using loop
let arr = [1, 7, 4, 2, 3, 1, 2, 2, 9, 3];

let arrAns = [];

for (let i = 0; i < arr.length; i++) {
    if (arrAns.indexOf(arr[i]) === -1) {
        arrAns.push(arr[i]);
    }
}

for (let i = 0; i < arrAns.length; i++) {
    for (let j = i + 1; j < arrAns.length; j++) {
        if (arrAns[i] < arrAns[j]) {
            let tmp = arrAns[i];
            arrAns[i] = arrAns[j];
            arrAns[j] = tmp;
        }
    }
}

console.log(arrAns);

// Using filter
let arr1 = [1, 7, 4, 2, 3, 1, 2, 2, 9, 3];

let uniqueArr1 = arr1.filter((value, index, originalArray) => {
    return originalArray.indexOf(value) === index;
});

let sortedArr1 = uniqueArr1.sort((a, b) => b - a);

console.log(sortedArr1);

// Using Set
let arr2 = [1, 7, 4, 2, 3, 1, 2, 2, 9, 3];

let arr_set = new Set(arr2);

let uniqueArr2 = Array.from(arr_set);

let sortedArr2 = uniqueArr2.sort((a, b) => b - a);

console.log(sortedArr2);

// Using reduce
let arr3 = [1, 7, 4, 2, 3, 1, 2, 2, 9, 3];

let uniqueSortedArr3 = arr3.reduce((uniqueArr3, value) => {
    if (!uniqueArr3.includes(value)) {
        uniqueArr3.push(value);
    }
    return uniqueArr3;
}, []).sort((a, b) => b - a);

console.log(uniqueSortedArr3);

// Using Map
let arr4 = [1, 7, 4, 2, 3, 1, 2, 2, 9, 3];

let elementCount = new Map();

arr4.forEach(num => {
    elementCount.set(num, (elementCount.get(num) || 0) + 1);
});

let uniqueArr4 = Array.from(elementCount.keys());

let sortedArr4 = uniqueArr4.sort((a, b) => b - a);

console.log(sortedArr4);



