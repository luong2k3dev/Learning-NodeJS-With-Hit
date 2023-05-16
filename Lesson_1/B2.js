/*
    Tìm phép giao giữa 2 mảng
        let arrA = [1, 7, 4, 2, 3];
        let arrB = [5, 2, 6, 3, 1];
    Output: [ 1, 2, 3 ]
*/

let arrA = [1, 2, 3, 1, 1];
let arrB = [1, 2, 1];

let setA = new Set(arrA);
let mapA = new Map();
let mapB = new Map();
let ansArr = [];

// Count element in arrA
for (let element of arrA) {
    mapA.set(element, (mapA.get(element) || 0) + 1);
}

// Count element in arrB
for (let element of arrB) {
    mapB.set(element, (mapB.get(element) || 0) + 1);
}

// Check for duplicate elements
let ansMap = new Map();

for (let element of setA) {
    if (mapB.has(element)) {
        let countA = mapA.get(element);
        let countB = mapB.get(element);
        let count = Math.min(countA, countB);
        ansMap.set(element, count);
    }
}

// Push the elements in order
for (let element of arrA) {
    if (ansMap.get(element) > 0) {
        ansArr.push(element);
        ansMap.set(element, ansMap.get(element) - 1);
    }
}

console.log(ansArr);






