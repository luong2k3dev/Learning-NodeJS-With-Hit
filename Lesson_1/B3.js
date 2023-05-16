/*
    Chuyển object sau thành array
    let users = [
        { id: 1, name: 'Hung', age: 17, role: 'admin' },
        { id: 32, name: 'HungThu2', age: 71, role: 'admin' },
        { id: 65, name: 'Dung', age: 21, role: 'user' },
        { id: 87, name: 'Quy', age: 99, role: 'user' },
        { id: 123, name: 'Chi', age: 8, role: 'user' },
    ];
    Output:
    [
        { '1': { id: 1, name: 'Hung', age: 17, role: 'admin' } },
        { '32': { id: 32, name: 'HungThu2', age: 71, role: 'admin' } },
        { '65': { id: 65, name: 'Dung', age: 21, role: 'user' } },
        { '87': { id: 87, name: 'Quy', age: 99, role: 'user' } },
        { '123': { id: 123, name: 'Chi', age: 8, role: 'user' } }
    ]
*/

let users = [
    { id: 1, name: 'Hung', age: 17, role: 'admin' },
    { id: 32, name: 'HungThu2', age: 71, role: 'admin' },
    { id: 65, name: 'Dung', age: 21, role: 'user' },
    { id: 87, name: 'Quy', age: 99, role: 'user' },
    { id: 123, name: 'Chi', age: 8, role: 'user' },
];

// Using map
let newArray = users.map(user => {
    let obj = {};
    obj[user.id] = user;
    return obj;
});

console.log(newArray);

// Using reduce
let arrAns = users.reduce((originalArray, user) => {
    originalArray.push({
        [user.id]: user,
    })
    return originalArray;
}, []);

console.log(arrAns);

